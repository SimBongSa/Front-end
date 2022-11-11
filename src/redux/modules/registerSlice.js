import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __register = createAsyncThunk(
  "regitser",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://3.39.193.27:8080/api/member/signup")
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
  },
  reducers: {},
  extraReducers: {
    [__register.fulfilled]: (state, action) => {
      state.userInfo.push(action.payload);
    }
  }
});

export const { register } = registerSlice.actions;
export default registerSlice.reducer;