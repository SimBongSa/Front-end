import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

const initialState = {
	TotalcalendarList: [],
	montList: [],
	calendarList: {},
	search: {},
	isLoading: false,
	error: null,
};

export const __getTotalCalendarList = createAsyncThunk(
	"getTotalCalendarList",
	async (payload, thunkAPI) => {
		try {
			const response = await apis.TotalcalendarList(payload);
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.data);
		}
	}
);

export const __getCalendarList = createAsyncThunk("getCalendarList", async (payload, thunkAPI) => {
	try {
		const response = await apis.calendarList(payload);
		return thunkAPI.fulfillWithValue(response.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error.data);
	}
});

export const __getMonthList = createAsyncThunk("getMonthList", async (payload, thunkAPI) => {
	try {
		const response = await apis.MonthList(payload);
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
			.addCase(__getTotalCalendarList.pending, state => {
				state.isLoading = true;
			})
			.addCase(__getTotalCalendarList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.TotalcalendarList = action.payload;
			})
			.addCase(__getTotalCalendarList.rejected, state => {
				state.isLoading = false;
			});
		builder
			.addCase(__getCalendarList.pending, state => {
				state.isLoading = true;
			})
			.addCase(__getCalendarList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.calendarList = action.payload;
			})
			.addCase(__getCalendarList.rejected, state => {
				state.isLoading = false;
			});
		builder
			.addCase(__getMonthList.pending, state => {
				state.isLoading = true;
			})
			.addCase(__getMonthList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.montList = action.payload;
			})
			.addCase(__getMonthList.rejected, state => {
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
