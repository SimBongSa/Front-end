import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

export const __getBoards = createAsyncThunk(
  "getBoards",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getboards(payload);
      console.log(response)
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBoardsId = createAsyncThunk(
  "getBoardsId",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getboardId(payload);
      return thunkAPI.fulfillWithValue(response.data.data);
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
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
      // boards get
      .addCase(__getBoards.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__getBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boards = action.payload;
      })
      .addCase(__getBoards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // detail board get
      .addCase(__getBoardsId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__getBoardsId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.boardsId = action.payload;
      })
      .addCase(__getBoardsId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // 지역 정보 get
      .addCase(__getArea.fulfilled, (state, action) => {
        state.isLoading = false;
        state.area = action.payload;
      })

      // 봉사 신청 post
      .addCase(__postApply.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log()
        state.apply = action.payload;
      })
  },
});

export const { boards } = boardSlice.actions;
export default boardSlice.reducer;