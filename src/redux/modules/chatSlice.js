import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

export const __getChatList = createAsyncThunk(
  "getChatList",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getChatList(payload);
      return thunkAPI.fulfillWithValue(response.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatList: [],
    isLoading: false,
    error: null,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(__getChatList.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__getChatList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chatList = action.payload;
      })
      .addCase(__getChatList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { chat } = chatSlice.actions;
export default chatSlice.reducer;