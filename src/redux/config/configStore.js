import { configureStore } from "@reduxjs/toolkit";
import { registerSlice } from "../modules/registerSlice";
import { mypageSlice } from "../modules/mypageSlice";
import customerList from "../modules/customerSlice";
import commentList from "../modules/commentSlice";
import courses from "../modules/addCreateSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    mypage: mypageSlice.reducer,
    customerList,
    commentList,
    courses,
  },
});
