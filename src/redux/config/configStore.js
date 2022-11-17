import { configureStore } from "@reduxjs/toolkit";
import { registerSlice } from "../modules/registerSlice";
import { mypageSlice } from "../modules/mypageSlice";
import customerList from "../modules/customerSlice";


export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    mypage: mypageSlice.reducer,
    customerList,
  },
});
