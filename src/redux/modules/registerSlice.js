import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";
import { setCookie } from "../../utils/cookie";

export const __loginMember = createAsyncThunk("loginMember", async (payload, thunkAPI) => {
	try {
		const response = await apis.memberLogin(payload);
		console.log(response);
		if (response.status === 200) {
			localStorage.setItem("refresh-token", response.headers["refresh-token"]); // refresh token은 로껄스토리지
			setCookie("access-token", response.headers["access-token"], {
				// access token은 쿠키에
				path: "/",
				secure: true,
				sameSite: "none",
			});
			setCookie("ID", response.data.data["id"], {
				path: "/",
				secure: true,
				sameSite: "none",
			});
			setCookie("username", response.data.data["username"], {
				path: "/",
				secure: true,
				sameSite: "none",
			});
			setCookie("authority", response.data.data["authority"], {
				path: "/",
				secure: true,
				sameSite: "none",
			});
		}
		return thunkAPI.fulfillWithValue(response.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __registerMember = createAsyncThunk("regitserMember", async (payload, thunkAPI) => {
	try {
		const response = await apis.memberSignup(payload);
		if (response.status === 200) {
			return thunkAPI.fulfillWithValue(response.data.success);
		}
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __registerManager = createAsyncThunk("registerManager", async (payload, thunkAPI) => {
	const formData = new FormData();
	Object.entries(payload).forEach(([key, value]) => {
		formData.append(key, value);
	});
	try {
		const response = await apis.managerSignup(payload);
		if (response.status === 200) {
			return thunkAPI.fulfillWithValue(response.data.success);
		} else if (response.status === 400) {
			return thunkAPI.rejectWithValue(response.data.error.detail);
		}
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __checkUsername = createAsyncThunk("checkUsername", async (payload, thunkAPI) => {
	try {
		const response = await apis.checkUsername(payload);

		return thunkAPI.fulfillWithValue(response.data.success);

	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __checkNickname = createAsyncThunk("checkNickname", async (payload, thunkAPI) => {
	try {
		const response = await apis.checkNickname(payload);

		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const registerSlice = createSlice({
	name: "userInfo",
	initialState: {
		memberInfo: [],
		managerInfo: [],
		loginInfo: [],
		usernameCheck: "",
		nicknameCheck: "",
		successCheck: "",
		statusCode: null,
		isLoading: false,
		error: "",
	},
	reducers: {},
	extraReducers: builder => {
		//  Login
		builder
			// member
			.addCase(__loginMember.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__loginMember.fulfilled, (state, action) => {
				state.isLoading = false;
				state.statusCode = action.payload;
				state.loginInfo = action.payload.data;
			})
			.addCase(__loginMember.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});

		// Register
		builder
			//Duplicate Check(username)
			.addCase(__checkUsername.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__checkUsername.fulfilled, (state, action) => {
				state.isLoading = false;
				state.usernameCheck = action.payload;
			})
			.addCase(__checkUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			//Member
			.addCase(__registerMember.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__registerMember.fulfilled, (state, action) => {
				state.isLoading = false;
				state.memberInfo.concat(action.payload);
				state.successCheck = action.payload;
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
				state.successCheck = action.payload;
			})
			.addCase(__registerManager.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { register, logOut } = registerSlice.actions;
export default registerSlice.reducer;
