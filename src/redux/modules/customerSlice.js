import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// yarn json-server --watch db.json --port 8080
const initialState = {
  customerList: {},
  isLoding: false,
  error: null,
};

export const __getCustomer = createAsyncThunk(
  "getCustomer",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8080/list");

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

const customerSlice = createSlice({
  name: "customerList",
  initialState,
  reducers: {},
  extraReducers: {
    [__getCustomer.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerList = action.payload;
    },
    [__getCustomer.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = customerSlice.actions;
export default customerSlice.reducer;

//   extraReducers: (builder) => {
//   builder
//   .addCase(__register.pending, (state, action) => {
//     state.isLoading = true;
//   })
//   .addCase(__register.fulfilled, (state, action) => {
//     state.isLoading = false;
//     state.userInfo.concat(action.payload);
//   })
//   .addCase(__register.rejected, (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   })
// }
