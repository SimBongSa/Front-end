import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addCreateApi,
  getCreateApi,
  delCreateApi,
  editCreateApi,
} from "./Api/addCreateApi";

const BASE_URL = process.env.REACT_APP_SERVER;

export const __addCreate = createAsyncThunk(
  "addCreate",
  async (payload, thunkAPI) => {
    console.log(payload);

    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      await addCreateApi(payload);
      alert("봉사 등록이 완료되었습니다");
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCreate = createAsyncThunk(
  "getCreate",
  async (payload, thunkAPI) => {
    try {
      const response = await getCreateApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delCreate = createAsyncThunk(
  "delCreate",
  async (payload, thunkAPI) => {
    try {
      alert("삭제가 완료되었습니다.");
      const response = await delCreateApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editCreate = createAsyncThunk(
  "editBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await editCreateApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCreateSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],

    course: null,
    review: {},

    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (bulider) => {
    // POST Request board Item(__addCreate)
    bulider.addCase(__addCreate.pending, (state, _) => {
      state.isLoading = true;
    });
    bulider.addCase(__addCreate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses.push(action.payload);
    });
    bulider.addCase(__addCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // GET Request board Item(__getCreate)
    bulider.addCase(__getCreate.pending, (state, _) => {
      state.isLoading = true;
      state.isDone = false;
    });
    bulider.addCase(__getCreate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isDone = true;
      state.courses = action.payload;
    });
    bulider.addCase(__getCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // DEL Request board Item(__delCreate)
    bulider.addCase(__delCreate.pending, (state, _) => {
      state.isLoading = true;
    });
    bulider.addCase(__delCreate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.filter((item) => item.id !== action.payload);
    });
    bulider.addCase(__delCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //EDIT Request board Item(__editCreate)
    bulider.addCase(__editCreate.pending, (state, _) => {
      state.isLoading = true;
    });
    bulider.addCase(__editCreate.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.courses = state.courses.map((courses) => {
        return courses.id === action.payload.id ? action.payload : courses;
      });
    });
    bulider.addCase(__editCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

//   export const { addPost } = addCreateSlice.actions;
export default addCreateSlice.reducer;