import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData, updateData } from "@/store/AsyncFuncs";

const useTodo = () => {
  const dispatch: any = useDispatch();
  const [updateRef, setUpdateRef] = useState({});
  const [input, setInput] = useState<any>({
    value: "",
  });
  const addTodoH = () => {
    dispatch(addData(input));
    setInput({ value: "" });
  };

  useEffect(() => {
    // let spin:any = document.getElementById('spiner')
    // spin.style.display = 'flex'
    // try {
      // console.log('Before Requiest');
      dispatch(getData());
    // } catch (error) {
      // alert(error)
    // }finally{
    //   // spin.style.display = 'none'
    //   console.log('After Requiest');
    // }
  }, []);
  const inputH = (e: any) => {
    setInput({
      ...input,
      value: e.target.value,
    });
    setUpdateRef({
      ...updateRef,
      value:e.target.value
    })
  };
  const goGithub = () => {
    window.open("https://github.com/ameen-ansari/SMIT-Assignments/tree/master/assignment_13", "_blank");
  };
  
  const deleteH = (e: any) => {
    let adder = document.getElementById("adder") as HTMLSpanElement;
    let updater = document.getElementById("updater") as HTMLSpanElement;
    adder.style.display = "block";
    updater.style.display = "none";
    dispatch(deleteData(e));
    setInput({value:''})
  };
  const updateH = (e: any) => {
    setInput({ value: e.value });
    setUpdateRef( e );
    let adder = document.getElementById("adder") as HTMLSpanElement;
    let updater = document.getElementById("updater") as HTMLSpanElement;
    adder.style.display = "none";
    updater.style.display = "block";
  };
  let updateTodoH = () => {
    dispatch(updateData(updateRef));
    setInput({value:''})
  };

  return { input, updateTodoH, addTodoH, inputH, goGithub, deleteH, updateH };
};
export default useTodo;
