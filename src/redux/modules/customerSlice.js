import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apis } from "./Api/apis";

// yarn json-server --watch db.json --port 8080
const initialState = {
  customerList: {},
  isLoading: false,
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

export const __putCutomer = createAsyncThunk(
  "putCustomer",
  async (payload, thunkAPI) => {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await apis.edit(payload);

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
  extraReducers: (builder) => {
    builder
      .addCase(__getCustomer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customerList = action.payload;
      })
      .addCase(__getCustomer.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(__putCutomer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__putCutomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customerList = action.payload;
      })
      .addCase(__putCutomer.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = customerSlice.actions;
export default customerSlice.reducer;
