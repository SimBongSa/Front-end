import { configureStore } from "@reduxjs/toolkit";
import { registerSlice } from "../modules/registerSlice";
import { mypageSlice } from "../modules/mypageSlice";
import customerList from "../modules/customerSlice";
import commentList from "../modules/commentSlice";
import { boardSlice } from "../modules/boardSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    boards: boardSlice.reducer,
    mypage: mypageSlice.reducer,
    customerList,
    commentList,
  },
});
