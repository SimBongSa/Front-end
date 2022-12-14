import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "./Api/apis";

export const __getTotalComment = createAsyncThunk("getTotalComment", async (payload, thunkAPI) => {
	try {
		const { data } = await apis.getTotalComment(payload);
		return thunkAPI.fulfillWithValue(data.data.comments);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getComment = createAsyncThunk("getComment", async (payload, thunkAPI) => {
	try {
		const { data } = await apis.getComment(payload);
		return thunkAPI.fulfillWithValue(data.data.comments);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __postComment = createAsyncThunk("postComment", async (payload, thunkAPI) => {
	try {
		const { data } = await apis.postComment(payload);
		if (data.success === true) {
			alert("댓글이 작성되었습니다.");
		}
		return thunkAPI.fulfillWithValue(data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __putComment = createAsyncThunk("putComment", async (payload, thunkAPI) => {
	try {
		const { data } = await apis.putComment(payload);
		if (data.success === true) {
			alert("댓글이 수정되었습니다.");
		}
		return thunkAPI.fulfillWithValue(data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __deleteComment = createAsyncThunk("deleteComment", async (payload, thunkAPI) => {
	try {
		const { data } = await apis.deleteComment(payload);
		if (data.success === true) {
			alert("댓글이 삭제되었습니다.");
		}
		return thunkAPI.fulfillWithValue(payload);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const commentSlice = createSlice({
	name: "comment",
	initialState: {
		commentTotalList: [],
		commentList: [],
		isLoading: false,
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(__getTotalComment.pending, state => {
				state.isLoading = true;
			})
			.addCase(__getTotalComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.commentTotalList = action.payload;
			})
			.addCase(__getTotalComment.rejected, state => {
				state.isLoading = false;
			});
		builder
			.addCase(__getComment.pending, state => {
				state.isLoading = true;
			})
			.addCase(__getComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.commentList = action.payload;
			})
			.addCase(__getComment.rejected, state => {
				state.isLoading = false;
			});
		builder
			.addCase(__postComment.pending, state => {
				state.isLoading = true;
			})
			.addCase(__postComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.commentList.push(action.payload);
			})
			.addCase(__postComment.rejected, state => {
				state.isLoading = false;
			});
		builder
			.addCase(__putComment.pending, state => {
				state.isLoading = true;
			})
			.addCase(__putComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.commentList = state.commentList.map(item => {
					return item.commentId === action.payload.commentId ? action.payload : item;
				});
			})
			.addCase(__putComment.rejected, state => {
				state.isLoading = false;
			});
		builder
			.addCase(__deleteComment.pending, state => {
				state.isLoading = true;
			})
			.addCase(__deleteComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.commentList = state.commentList.filter(item => item.commentId !== action.payload);
			})
			.addCase(__deleteComment.rejected, state => {
				state.isLoading = false;
			});
	},
});

export const { comment } = commentSlice.actions;
export default commentSlice.reducer;
