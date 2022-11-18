import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

export const __getBoards = createAsyncThunk(
  "companyInfo",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getboards(payload);
      console.log("response => ", response.data.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBoardsId = createAsyncThunk(
  "companyInfoId",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getboardId(payload);
      console.log("getboardsId =>", response);
      return thunkAPI.fulfillWithValue(response.data.data);
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
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const { boards } = boardSlice.actions;
export default boardSlice.reducer;
