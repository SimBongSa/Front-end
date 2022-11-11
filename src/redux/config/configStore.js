import { configureStore } from "@reduxjs/toolkit";
import { registerSlice } from "../modules/registerSlice";
import customerList from "../modules/customerSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    customerList,
  },
});
