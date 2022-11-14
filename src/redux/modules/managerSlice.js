import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER

export const __registerManager = createAsyncThunk(
  "regitser",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.post(`${BASE_URL}/api/managers/signup`)
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const registerSlice = createSlice({
  name: "userInfo",
  initialState: {
    managerInfo: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__registerManager.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__registerManager.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo.concat(action.payload);
      })
      .addCase(__registerManager.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const { register } = registerSlice.actions;
export default registerSlice.reducer;