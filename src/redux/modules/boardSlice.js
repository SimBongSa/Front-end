import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

export const __createBoard = createAsyncThunk(
  "createBoard",
  async (payload, thunkAPI) => {
    console.log("post 페이로드 =>", payload);
    const formData = new FormData();

    //formData append
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    //formData console.log
    // for (let key of formData.keys()) {
    //   console.log("formData ===>", key, ":", formData.get(key));
    // }

    try {
      const response = await apis.createBoard(payload);
      console.log("createBoard response =>", response);
      if (response.status === 200) {
        alert(response.data.data.msg);
        // response.data.data.boardId
        return thunkAPI.fulfillWithValue(response.data.data.boardId);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBoard = createAsyncThunk(
  "getBoards",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getBoard(payload);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBoardId = createAsyncThunk(
  "getBoardsId",
  async (payload, thunkAPI) => {
<<<<<<< HEAD
    console.log("__getBoardsId => ", payload);
=======
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
    try {
      const response = await apis.getBoardId(payload);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editBoard = createAsyncThunk(
  "editBoard",
  async (payload, thunkAPI) => {
    console.log("edit 페이로드 =>", payload);
    const formData = new FormData();

    // formData append
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    //formData console.log
    // for (let key of formData.keys()) {
    //   console.log("formData ===>", key, ":", formData.get(key));
    // }
    try {
      const response = await apis.editBoard(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delBoard = createAsyncThunk(
  "delCreate",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.delBoard(payload);

      if (response.status === 200) {
        alert("봉사 삭제가 완료되었습니다.");
        return thunkAPI.fulfillWithValue(response);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getArea = createAsyncThunk(
  "getArea",
  async (payload, thunkAPI) => {
    try {
      const response = await payload;
<<<<<<< HEAD
      console.log(payload);
      console.log(response);
=======
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
<<<<<<< HEAD
=======

export const __postApply = createAsyncThunk(
  "apply",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const response = await apis.applyBoard(payload)
      if (response.status === 200) {
        alert(response.data.data.msg)
        console.log(response.data.data.msg)
        return thunkAPI.fulfillWithValue(response.data.data.msg);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb

export const boardSlice = createSlice({
  name: "boards",
  initialState: {
    boards: [],
    board: [],
    area: [],
    apply: "",
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
<<<<<<< HEAD
      // POST (__createBoard)
      .addCase(__createBoard.pending, (state, _) => {
=======

      // boards get
      .addCase(__getBoards.pending, (state, _) => {
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
        state.isLoading = true;
      })
      .addCase(__createBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action.payload => ", action.payload);
        state.boards.push(action.payload);
      })
      .addCase(__createBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

<<<<<<< HEAD
      //Total GET (__getBoard)
      .addCase(__getBoard.pending, (state, _) => {
=======
      // detail board get
      .addCase(__getBoardsId.pending, (state, _) => {
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
        state.isLoading = true;
      })
      .addCase(__getBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = action.payload;
      })
      .addCase(__getBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

<<<<<<< HEAD
      //Each GET (__getBoardId)
      .addCase(__getBoardId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__getBoardId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boardsId = action.payload;
      })
      .addCase(__getBoardId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //area GET
=======
      // 지역 정보 get
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
      .addCase(__getArea.fulfilled, (state, action) => {
        state.isLoading = false;
        state.area = action.payload;
      })

<<<<<<< HEAD
      //PUT (__editCreate)
      .addCase(__editBoard.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__editBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = state.boards.map((item) => {
          return item.id === action.payload.id ? action.payload : item;
        });
      })
      .addCase(__editBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //DEL (__delBoard)
      .addCase(__delBoard.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__delBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = state.boards.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(__delBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
=======
      // 봉사 신청 post
      .addCase(__postApply.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log()
        state.apply = action.payload;
      })
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
  },
});

export const { boards } = boardSlice.actions;
export default boardSlice.reducer;
