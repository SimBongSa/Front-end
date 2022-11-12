import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER

export const __registerUser = createAsyncThunk(
  "regitser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.post(`${BASE_URL}/api/members/signup`)
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