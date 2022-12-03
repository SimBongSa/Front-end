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

export const __createChatRoom = createAsyncThunk(
  "createChatRoom",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.createChatRoom(payload);
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getChatHistory = createAsyncThunk(
  "getChatHistory",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getChatHistory(payload);
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatRoom: [],
    chatList: [],
    chatHistory: [],
    isLoading: false,
    error: null,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      // Get Chat List
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

      // Post ChatRoom
      .addCase(__createChatRoom.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__createChatRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chatRoom = action.payload;
      })
      .addCase(__createChatRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get Chat History
      .addCase(__getChatHistory.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__getChatHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chatHistory = action.payload;
      })
      .addCase(__getChatHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { chat } = chatSlice.actions;
export default chatSlice.reducer;