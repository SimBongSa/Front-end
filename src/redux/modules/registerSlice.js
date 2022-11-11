import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER

export const __register = createAsyncThunk(
  "regitser",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`${BASE_URL}/api/member/signup`)
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const registerSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo.concat(action.payload);
      })
      .addCase(__register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const { register } = registerSlice.actions;
export default registerSlice.reducer;