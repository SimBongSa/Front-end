import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./APi/apis";

// yarn json-server --watch db.json --port 8080
const initialState = {
  customerList: {},
  mainList: {},
  isLoading: false,
  error: null,
};

export const __getCustomer = createAsyncThunk(
  "getCustomer",
  async (dueDay, thunkAPI) => {
    try {
      const response = await apis.customerlist(dueDay);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

export const __getmainlist = createAsyncThunk(
  "getmainlist",
  async (boardId, thunkAPI) => {
    try {
      const response = await apis.mainlist(boardId);
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
    // formData.append("images", blob);

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
      .addCase(__getmainlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getmainlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.mainList = action.payload;
      })
      .addCase(__getmainlist.rejected, (state) => {
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
