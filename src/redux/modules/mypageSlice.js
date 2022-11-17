import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

export const __getCompanyInfo = createAsyncThunk(
  "companyInfo",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getCompanyPage(payload);
      // console.log(response.data.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCompanyBoards = createAsyncThunk(
  "companyBoards",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.getCompanyBoards(payload);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const mypageSlice = createSlice({
  name: "mypage",
  initialState: {
    companyInfo: [],
    companyBoards: [],
    user: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getCompanyInfo.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__getCompanyInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companyInfo = action.payload;
      })
      .addCase(__getCompanyInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // get company boards
      .addCase(__getCompanyBoards.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__getCompanyBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.companyBoards = action.payload;
      })
      .addCase(__getCompanyBoards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { mypage } = mypageSlice.actions;
export default mypageSlice.reducer;
