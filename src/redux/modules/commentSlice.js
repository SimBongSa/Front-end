import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.getComment(payload);
      return thunkAPI.fulfillWithValue(data.data.comments);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComment = createAsyncThunk(
  "postComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.postComment(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export const __putComment = createAsyncThunk(
  "putComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await apis.putComment(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      await apis.deleteComment(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.commentList = action.payload;
      })
      .addCase(__getComment.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(__postComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__postComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.commentList.push(action.payload);
      })
      .addCase(__postComment.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(__putComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.commentList = state.commentList.map((item) => {
          return item.commentId === action.payload.commentId
            ? action.payload
            : item;
        });
      })
      .addCase(__putComment.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(__deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.commentList = state.commentList.filter(
          (item) => item.commentId !== action.payload
        );
      })
      .addCase(__deleteComment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { comment } = commentSlice.actions;
export default commentSlice.reducer;
