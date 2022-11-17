import { configureStore } from "@reduxjs/toolkit";
import { registerSlice } from "../modules/registerSlice";
import { mypageSlice } from "../modules/mypageSlice";
import customerList from "../modules/customerSlice";
<<<<<<< HEAD
import commentList from "../modules/commentSlice";
import courses from "../modules/addCreateSlice";
=======
import { boardSlice } from "../modules/boardSlice";

>>>>>>> 42ca578544c7c310a57c2f2b253adf54ca85a840

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    boards: boardSlice.reducer,
    mypage: mypageSlice.reducer,
    customerList,
    commentList,
    courses,
  },
});
