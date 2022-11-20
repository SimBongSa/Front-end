import { configureStore } from "@reduxjs/toolkit";
import { registerSlice } from "../modules/registerSlice";
import { mypageSlice } from "../modules/mypageSlice";
<<<<<<< HEAD
import customerList from "../modules/customerSlice";
import commentList from "../modules/commentSlice";
=======
import calendarList from "../modules/calendarSlice";
import comment from "../modules/commentSlice";
import courses from "../modules/addCreateSlice";
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
import { boardSlice } from "../modules/boardSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    boards: boardSlice.reducer,
    mypage: mypageSlice.reducer,
<<<<<<< HEAD
    customerList,
    commentList,
=======
    calendarList,
    comment,
    courses,
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
  },
});
