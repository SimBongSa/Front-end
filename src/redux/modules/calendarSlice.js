import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

const initialState = {
	calendarList: {},
	search: {},
	isLoading: false,
	error: null,
};

export const __getCustomer = createAsyncThunk("getCustomer", async (payload, thunkAPI) => {
	console.log(payload);
	try {
		const response = await apis.calendarList(payload);
		return thunkAPI.fulfillWithValue(response.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.data);
	}
});

export const __postSearch = createAsyncThunk("postSearch", async (payload, thunkAPI) => {
	try {
		const response = await apis.search(payload);
		return thunkAPI.fulfillWithValue(response.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.data);
	}
});

const calendarSlice = createSlice({
	name: "calendarList",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(__getCustomer.pending, state => {
				state.isLoading = true;
			})
			.addCase(__getCustomer.fulfilled, (state, action) => {
				state.isLoading = false;
				state.calendarList = action.payload;
			})
			.addCase(__getCustomer.rejected, state => {
				state.isLoading = false;
			});
		builder
			.addCase(__postSearch.pending, state => {
				state.isLoading = true;
			})
			.addCase(__postSearch.fulfilled, (state, action) => {
				state.isLoading = false;
				state.search = action.payload;
			})
			.addCase(__postSearch.rejected, state => {
				state.isLoading = false;
			});
		// builder
		//   .addCase(__getmainlist.pending, (state) => {
		//     state.isLoading = true;
		//   })
		//   .addCase(__getmainlist.fulfilled, (state, action) => {
		//     state.isLoading = false;
		//     state.mainList = action.payload;
		//   })
		//   .addCase(__getmainlist.rejected, (state) => {
		//     state.isLoading = false;
		//   });
		// builder
		//   .addCase(__putCutomer.pending, (state) => {
		//     state.isLoading = true;
		//   })
		//   .addCase(__putCutomer.fulfilled, (state, action) => {
		//     state.isLoading = false;
		//     state.calendarList = action.payload;
		//   })
		//   .addCase(__putCutomer.rejected, (state) => {
		//     state.isLoading = false;
		//   });
	},
});

export const {} = calendarSlice.actions;
export default calendarSlice.reducer;
