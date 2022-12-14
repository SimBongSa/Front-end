import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

export const __createBoard = createAsyncThunk("createBoard", async (payload, thunkAPI) => {
	const formData = new FormData();
	//formData append
	Object.entries(payload).forEach(([key, value]) => {
		formData.append(key, value);
	});
	try {
		const response = await apis.createBoard(formData);
		if (response.status === 200) {
			return thunkAPI.fulfillWithValue(response);
		}
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getBoard = createAsyncThunk("getBoard", async (payload, thunkAPI) => {
	try {
		const response = await apis.getBoard(payload);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getBoardCnt = createAsyncThunk(
	"getBoardCnt",
	async (payload, thunkAPI) => {
		try {
			const response = await apis.getBoardCnt(payload);
			return thunkAPI.fulfillWithValue(response.data.data.cnt);
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
)

export const __getBoardId = createAsyncThunk("getBoardId", async (payload, thunkAPI) => {
	try {
		const response = await apis.getBoardId(payload);
		return thunkAPI.fulfillWithValue(response.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getSearchBoards = createAsyncThunk("getSearchBoards", async (payload, thunkAPI) => {
	try {
		const response = await apis.getSearchBoards(payload);
		if (response.status === 200) {
			return thunkAPI.fulfillWithValue(response.data.data);
		}
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __editBoard = createAsyncThunk("editBoard", async (payload, thunkAPI) => {
	const formData = new FormData();

	// formData append
	Object.entries(payload).forEach(([key, value]) => {
		formData.append(key, value);
	});

	try {
		const response = await apis.editBoard(payload);
		return thunkAPI.fulfillWithValue(response);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __delBoard = createAsyncThunk("delCreate", async (payload, thunkAPI) => {
	try {
		const response = await apis.delBoard(payload);
		return thunkAPI.fulfillWithValue(response);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getArea = createAsyncThunk("getArea", async (payload, thunkAPI) => {
	try {
		const response = await payload;

		return thunkAPI.fulfillWithValue(response);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __postApply = createAsyncThunk("apply", async (payload, thunkAPI) => {
	try {
		const response = await apis.applyBoard(payload);

		if (response.status === 200) {
			return thunkAPI.fulfillWithValue(response.data.data.msg);
		}
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const boardSlice = createSlice({
	name: "boards",
	initialState: {
		boards: [],
		boardsCnt: null,
		board: [],
		searchResult: null,
		area: [],
		apply: "",
		status: null,
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(__createBoard.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__createBoard.fulfilled, (state, action) => {
				state.isLoading = false;
				state.status = action.payload.status;
				state.boards.push(action.payload.data.data);
			})
			.addCase(__createBoard.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			//Total GET (__getBoard)
			.addCase(__getBoard.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getBoard.fulfilled, (state, action) => {
				state.isLoading = false;
				state.boards.push(...action.payload);
			})
			.addCase(__getBoard.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(__getBoardCnt.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getBoardCnt.fulfilled, (state, action) => {
				state.isLoading = false;
				state.boardsCnt = action.payload;
			})
			.addCase(__getBoardCnt.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			//Each GET (__getBoardId)
			.addCase(__getBoardId.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__getBoardId.fulfilled, (state, action) => {
				state.isLoading = false;
				state.board = action.payload;
			})
			.addCase(__getBoardId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			// GET Search
			.addCase(__getSearchBoards.pending, (state, _) => {
				state.isLoading = true;
				state.searchResult = [];
			})
			.addCase(__getSearchBoards.fulfilled, (state, action) => {
				state.isLoading = false;
				state.searchResult = action.payload;
			})
			.addCase(__getSearchBoards.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			//area GET
			.addCase(__getArea.fulfilled, (state, action) => {
				state.isLoading = false;
				state.area = action.payload;
			})

			//PUT (__editCreate)
			.addCase(__editBoard.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__editBoard.fulfilled, (state, action) => {
				state.isLoading = false;
				state.status = action.payload.status;
			})
			.addCase(__editBoard.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			//DEL (__delBoard)
			.addCase(__delBoard.pending, (state, _) => {
				state.isLoading = true;
			})
			.addCase(__delBoard.fulfilled, (state, action) => {
				state.isLoading = false;
				state.boards = state.boards.filter(item => item.id !== action.payload);
			})
			.addCase(__delBoard.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});

		//Edit Volun __postApply
		// .addCase(__postApply.pending, (state, _) => {
		// 	state.isLoading = true;
		// })
		// .addCase(__postApply.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.status = action.payload.status;
		// 	state.boards.push(action.payload.data.data);
		// })
		// .addCase(__createBoard.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = action.payload;
		// });
	},
});

export const { boards } = boardSlice.actions;
export default boardSlice.reducer;
