import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

let mkLoaderVisible = () => {
  let spin = document.getElementById("spiner") as HTMLDivElement;
  let adder = document.getElementById("adder") as HTMLButtonElement;
  let updater = document.getElementById("updater") as HTMLButtonElement;
  spin.style.display = "block";
  spin.style.position = "absolute";
  spin.style.zIndex = "2";
  spin.style.top = "50%";
  spin.style.left = "45%";
  adder.disabled = true
  updater.disabled = true
};

let mkLoaderInVisible = () => {
  let spin = document.getElementById("spiner") as HTMLDivElement;
  let adder = document.getElementById("adder") as HTMLButtonElement;
  let updater = document.getElementById("updater") as HTMLButtonElement;  
  spin.style.display = "none";
  updater.disabled = false
  adder.disabled = false
};
export let addData = createAsyncThunk("addData/Todo", async (arg1: any) => {
  try {
    mkLoaderVisible()
    let data = await addDoc(collection(db, "TODOS_BY_REDUX"), arg1);
    let docRef = doc(db, "TODOS_BY_REDUX", data.id);
    await updateDoc(docRef, {
      id: data.id,
    });
    let payload = {
      ...arg1,
      id: data.id,
    };
    return payload;
  } catch (error) {
    alert(error);
  } finally {
    mkLoaderInVisible()
  }
});

export let getData = createAsyncThunk("getData/Todo", async () => {
  let spin = document.getElementById("spiner") as HTMLDivElement;
  try {
    spin.style.display = "flex";
    let docs = await getDocs(collection(db, "TODOS_BY_REDUX"));
    let ToDo_Data: any = [];
    docs.forEach((doc) => {
      ToDo_Data.push(doc.data());
    });
    return ToDo_Data;
  } catch (err) {
    alert(err);
  } finally {
    spin.style.display = "none";
  }
});

export let deleteData = createAsyncThunk("deleteData/Todo", async (e: any) => {
  let docRef = doc(db, "TODOS_BY_REDUX", e.id);
  try {
    mkLoaderVisible();
    await deleteDoc(docRef);
  } catch (error) {
    alert(error);
  } finally {
    mkLoaderInVisible();
  }
  return e;
});

export let updateData = createAsyncThunk("updateData/Todo", async (e: any) => {
  let docRef = doc(db, "TODOS_BY_REDUX", e.id);
  try {
    mkLoaderVisible();
    await updateDoc(docRef, {
      value: e.value,
    });
    let adder = document.getElementById("adder") as HTMLButtonElement;
    let updater = document.getElementById("updater") as HTMLButtonElement;
    adder.style.display = "block";
    updater.style.display = "none";
  } catch (error) {
    alert(error);
  } finally {
    mkLoaderInVisible();
  }
  return e;
});
