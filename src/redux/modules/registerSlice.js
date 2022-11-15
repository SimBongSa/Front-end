import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

<<<<<<< HEAD
export const __register = createAsyncThunk(
  "register",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://3.39.193.27:8080/api/member/signup");
=======
const BASE_URL = process.env.REACT_APP_SERVER

export const __registerUser = createAsyncThunk(
  "regitser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/members/signup`, payload, {
        'Content-Type' : 'application/json',
      });
      console.log(payload);
      console.log(response.data);
>>>>>>> 81e37ec9527984565b5aee9861f5980c58285a8c
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
      .addCase(__registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo.concat(action.payload);
      })
      .addCase(__registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const { register } = registerSlice.actions;
export default registerSlice.reducer;
