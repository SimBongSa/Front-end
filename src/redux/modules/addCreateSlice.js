import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
<<<<<<< HEAD
import {
  addCreateApi,
  getCreateApi,
  delCreateApi,
  editCreateApi,
} from "./APi/addCreateApi";
=======
import { apis } from "./Api/api";
>>>>>>> 0a7ac19ef2f07fc0c07631e03853eaf99e7814c9

const BASE_URL = process.env.REACT_APP_SERVER;

export const __addCreate = createAsyncThunk(
  "addCreate",
  async (payload, thunkAPI) => {
    console.log(payload);
<<<<<<< HEAD

    const formData = new FormData();

=======
    const formData = new FormData();
>>>>>>> 0a7ac19ef2f07fc0c07631e03853eaf99e7814c9
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
<<<<<<< HEAD
      await addCreateApi(payload);
=======
      await apis.addCreate(payload);
>>>>>>> 0a7ac19ef2f07fc0c07631e03853eaf99e7814c9
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
<<<<<<< HEAD
      const response = await getCreateApi(payload);
=======
      const response = await apis.getCreate(payload);
>>>>>>> 0a7ac19ef2f07fc0c07631e03853eaf99e7814c9
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
<<<<<<< HEAD
      const response = await delCreateApi(payload);
=======
      const response = await apis.delCreate(payload);
>>>>>>> 0a7ac19ef2f07fc0c07631e03853eaf99e7814c9
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
<<<<<<< HEAD
      const response = await editCreateApi(payload);
=======
      const response = await apis.editCreate(payload);
>>>>>>> 0a7ac19ef2f07fc0c07631e03853eaf99e7814c9
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
    bulider.getCase(__getCreate.pending, (state, _) => {
      state.isLoading = true;
      state.isDone = false;
    });
    bulider.getCase(__getCreate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isDone = true;
      state.courses = action.payload;
    });
    bulider.getCase(__getCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // DEL Request board Item(__delCreate)
    bulider.delCase(__delCreate.pending, (state, _) => {
      state.isLoading = true;
    });
    bulider.delCase(__delCreate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.boards = state.boards.filter((item) => item.id !== action.payload);
    });
    bulider.delCase(__delCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //EDIT Request board Item(__editCreate)
    bulider.editCase(__editCreate.pending, (state, _) => {
      state.isLoading = true;
    });
    bulider.editCase(__editCreate.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.courses = state.courses.map((courses) => {
        return courses.id === action.payload.id ? action.payload : courses;
      });
    });
    bulider.editCase(__editCreate.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

//   export const { addPost } = addCreateSlice.actions;
export default addCreateSlice.reducer;
