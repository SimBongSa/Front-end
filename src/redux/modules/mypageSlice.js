import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apis } from "./Api/apis";

// User
export const __getUserInfo = createAsyncThunk("userInfo", async (payload, thunkAPI) => {
	try {
		const response = await apis.getUserPage(payload);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
export const __getUserEnroll = createAsyncThunk("enroll", async (payload, thunkAPI) => {
	try {
		const response = await apis.getUserEnroll(payload);
		console.log(response);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
export const __getUserWait = createAsyncThunk("wait", async (payload, thunkAPI) => {
	try {
		const response = await apis.getUserWait(payload);
		console.log(response);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
export const __getUserPass = createAsyncThunk("pass", async (payload, thunkAPI) => {
	try {
		const response = await apis.getUserPass(payload);
		console.log(response);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getUserReject = createAsyncThunk("reject", async (payload, thunkAPI) => {
	const formData = new FormData();

	// formData append
	Object.entries(payload).forEach(([key, value]) => {
		formData.append(key, value);
	});

	try {
		const response = await apis.getUserReject(payload);
		console.log(response);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __putUserInfo = createAsyncThunk("putUserInfo", async (payload, thunkAPI) => {
	const formData = new FormData();
	console.log("userInfo payload =>", payload);

	// formData append
	Object.entries(payload).forEach(([key, value]) => {
		formData.append(key, value);
	});

	try {
		const response = await axios.putUserPage(formData);
		if (response.status === 200) {
			alert(response.data.data.msg);
			return thunkAPI.fulfillWithValue(response);
		}
		return thunkAPI.fulfillWithValue(response);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

// 다른 유저 정보 get
export const __getOtherUserInfo = createAsyncThunk(
	"getOtherUserInfo",
	async (payload, thunkAPI) => {
		try {
			const response = await apis.getOtherUserInfo(payload);
			console.log("__getOtherUserInfo", response);
			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const __getOtherUserEnroll = createAsyncThunk(
	"getOtherUserEnroll",
	async (payload, thunkAPI) => {
		try {
			const response = await apis.getOtherUserEnroll(payload);
			console.log("getOtherUserEnroll", response);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

// Company
export const __getCompanyInfo = createAsyncThunk("companyInfo", async (payload, thunkAPI) => {
	try {
		console.log("__getCompanyInfo payload =>", payload);
		const response = await apis.getCompanyPage(payload);
		console.log("__getCompanyInfo response =>", response);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getCompanyBoards = createAsyncThunk("companyBoards", async (payload, thunkAPI) => {
	try {
		const response = await apis.getCompanyBoards(payload);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getAppliList = createAsyncThunk("appliList", async (payload, thunkAPI) => {
	try {
		const response = await apis.getAppliList(payload);
		console.log(response);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __putCompanyInfo = createAsyncThunk("__putCompanyInfo", async (payload, thunkAPI) => {
	const formData = new FormData();

	// formData append
	Object.entries(payload).forEach(([key, value]) => {
		formData.append(key, value);
	});

	for (let key of formData.keys()) {
		console.log("formData ===>", key, ":", formData.get(key));
	}

	try {
		const response = await apis.putCompanyPage(formData);
		console.log("__putCompanyInfo => ", response);
		if (response.status === 200) {
			alert(response.data.data.msg);
			return thunkAPI.fulfillWithValue(response);
		}
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getAllAppliList = createAsyncThunk("allAppliList", async (payload, thunkAPI) => {
	try {
		const response = await apis.getAllAppliList(payload);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __putApprove = createAsyncThunk("approve", async (payload, thunkAPI) => {
	try {
		const response = await apis.putApprove(payload);

		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __putDisapprove = createAsyncThunk("disapprove", async (payload, thunkAPI) => {
	try {
		const response = await apis.putDisapprove(payload);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getOtherCompanyInfo = createAsyncThunk(
	"getOtherCompanyInfo",
	async (payload, thunkAPI) => {
		try {
			const response = await apis.getOtherCompanyInfo(payload);
			console.log("getOtherCompanyInfo", response);
			return thunkAPI.fulfillWithValue(response.data.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const __getOtherCompanyBoards = createAsyncThunk(
	"getOtherCompanyBoards",
	async (payload, thunkAPI) => {
		try {
			const response = await apis.getOtherCompanyBoards(payload);
			console.log("getOtherCompanyBoards", response);
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
		allAppliList: [],
		otherCompanyInfo: [],
		otherCompanyBoards: [],

		appliList: [],
		approve: [],
		userInfo: [],
		userEnroll: [],
		userWait: [],
		userPass: [],
		userReject: [],
		otherUserInfo: [],
		otherUserEnroll: [],

		status: null,
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			// User
			.addCase(__getUserInfo.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getUserInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userInfo = action.payload;
			})
			.addCase(__getUserInfo.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(__getUserEnroll.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getUserEnroll.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userEnroll = action.payload;
			})
			.addCase(__getUserEnroll.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(__getUserWait.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getUserWait.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userWait = action.payload;
			})
			.addCase(__getUserWait.rejected, (state, action) => {
				state.isLoading = false;
				state.userWait = action.payload;
			})

			.addCase(__getUserPass.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getUserPass.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userPass = action.payload;
			})
			.addCase(__getUserPass.rejected, (state, action) => {
				state.isLoading = false;
				state.userPass = action.payload;
			})

			.addCase(__getUserReject.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getUserReject.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userReject = action.payload;
			})
			.addCase(__getUserReject.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(__getOtherUserInfo.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getOtherUserInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.otherUserInfo = action.payload;
			})
			.addCase(__getOtherUserInfo.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(__getOtherUserEnroll.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getOtherUserEnroll.fulfilled, (state, action) => {
				state.isLoading = false;
				state.otherUserEnroll = action.payload;
			})
			.addCase(__getOtherUserEnroll.rejected, (state, action) => {
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
			})

			//get All Applicants List
			.addCase(__getAllAppliList.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getAllAppliList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.allAppliList = action.payload;
			})
			.addCase(__getAllAppliList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			// get Applicant
			.addCase(__getAppliList.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getAppliList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.appliList = action.payload;
			})
			.addCase(__getAppliList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			// approve & disapprove
			.addCase(__putApprove.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__putApprove.fulfilled, (state, action) => {
				state.isLoading = false;
				state.approve = action.payload;
			})
			.addCase(__putApprove.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(__putDisapprove.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__putDisapprove.fulfilled, (state, action) => {
				state.isLoading = false;
				state.approve = action.payload;
			})
			.addCase(__putDisapprove.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(__putUserInfo.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__putUserInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.status = action.payload.status;
			})
			.addCase(__putUserInfo.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			// Company
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

			.addCase(__putCompanyInfo.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__putCompanyInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.status = action.payload.status;
			})
			.addCase(__putCompanyInfo.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(__getOtherCompanyInfo.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getOtherCompanyInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.otherCompanyInfo = action.payload;
			})
			.addCase(__getOtherCompanyInfo.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(__getOtherCompanyBoards.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getOtherCompanyBoards.fulfilled, (state, action) => {
				state.isLoading = false;
				state.otherCompanyBoards = action.payload;
			})
			.addCase(__getOtherCompanyBoards.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { mypage } = mypageSlice.actions;
export default mypageSlice.reducer;
