import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./APi/api";

export const __loginMember = createAsyncThunk(
  "login",
  async (payload, thunkAPI)=> {
    try {
      const response = await apis.memberLogin(payload);
      console.log(response);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __loginManager = createAsyncThunk(
  "login",
  async (payload, thunkAPI)=> {
    try {
      const response = await apis.managerLogin(payload);
      console.log(response);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __registerMember = createAsyncThunk(
  "regitserMember",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.memberSignup(payload);
      console.log(response.data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const __registerManager = createAsyncThunk(
  "registerManager",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.managerSignup(payload);
      console.log(response.data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerSlice = createSlice({
  name: "userInfo",
  initialState: {
    memberInfo: [],
    managerInfo: [],
    loginInfo: [],
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {

    //  Login
    builder
      // member
      .addCase(__loginMember.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__loginMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginInfo.concat(action.payload);
      })
      .addCase(__loginMember.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // manager
      .addCase(__loginManager.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__loginManager.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginInfo.concat(action.payload);
      })
      .addCase(__loginManager.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

    // Member Register
    builder
      .addCase(__registerMember.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__registerMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.memberInfo.concat(action.payload);
      })
      .addCase(__registerMember.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //ManagerRegister
      builder
      .addCase(__registerManager.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(__registerManager.fulfilled, (state, action) => {
        state.isLoading = false;
        state.managerInfo.concat(action.payload);
      })
      .addCase(__registerManager.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const { register } = registerSlice.actions;
export default registerSlice.reducer;