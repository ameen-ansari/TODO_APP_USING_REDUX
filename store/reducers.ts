import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getData , addData , deleteData , updateData } from "./AsyncFuncs";

const slice1: any = createSlice({
  name: "slice1",
  initialState: [],
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getData.fulfilled, (state: any, action: any) => {
      let MyState = action.payload;
      return MyState;
    });
    builder.addCase(addData.fulfilled, (state: any, action: any) => {
      let MyState = [...state, action.payload];
      return MyState;
    });
    builder.addCase(deleteData.fulfilled, (state: any, action: any) => {
      let arr: any = [];
      state.forEach((item: any): any => {
        if (action.payload.id !== item.id) {
          arr.push(item);
        }
      });
      return arr;
    });
    builder.addCase(updateData.fulfilled, (state: any, action: any) => {
      let arr: any = [];
      state.forEach((item: any): any => {
        if (action.payload.id !== item.id) {
          arr.push(item);
        }else{
          arr.push(action.payload)
        }
      });
      return arr;
    });
  },
});

export default combineReducers({
  slice1: slice1.reducer,
});

