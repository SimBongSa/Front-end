import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";
import { setCookie } from "../../utils/cookie";

export const __loginMember = createAsyncThunk(
  "loginMember",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.memberLogin(payload);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem(
          "refresh-token",
          response.headers["refresh-token"]
        ); // refresh token은 로껄스토리지
        setCookie("access-token", response.headers["access-token"], {
          // access token은 쿠키에
          path: "/",
          secure: true,
          sameSite: "none",
        });
        setCookie("username", response.headers["username"], {
          path: "/",
          secure: true,
          sameSite: "none",
        });
        // setCookie("userType", response.headers["userType"], {
        //   path: "/",
        //   secure: true,
        //   sameSite: "none",
        // })
      }
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __loginManager = createAsyncThunk(
  "loginManager",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.managerLogin(payload);
      return thunkAPI.fulfillWithValue(response.data);
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
      console.log(response);
      // if ( response.status === 200 ) {
      //   navigator()
      // }
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __registerManager = createAsyncThunk(
  "registerManager",
  async (payload, thunkAPI) => {
    try {
      const response = await apis.managerSignup(payload);
      return thunkAPI.fulfillWithValue(response.data);
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
    statusCode: null,
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
        state.statusCode = action.payload.success;
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
      });

    // Register
    builder
      //Member
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
      // Manager
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
      });
  },
});

export const { register } = registerSlice.actions;
export default registerSlice.reducer;
