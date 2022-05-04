import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { plasticPipeService } from "../../services/PlasticPipeService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllPlasticPipeList = createAsyncThunk(
  "/plasticPipe/fetchPlasticPipe",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await plasticPipeService.getAllPlasticPipe();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOnePlasticPipe = createAsyncThunk(
  "/plasticPipes/getOnePlasticPipe",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await plasticPipeService.getOnePlasticPipe(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePlasticPipe = createAsyncThunk(
  "/plasticPipes/updatePlasticPipe",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await plasticPipeService.updatePlasticPipe(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createPlasticPipe = createAsyncThunk(
  "/plasticPipes/createPlasticPipe",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await plasticPipeService.createPlasticPipe(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  plasticPipeList: [],
  plasticPipe: {},
};
export const plasticPipeSlice = createSlice({
  name: "plasticPipe",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPlasticPipeList.fulfilled.type]: (state, action) => {
      state.plasticPipeList = action.payload;
    },
    [getOnePlasticPipe.fulfilled.type]: (state, action) => {
      state.plasticPipe = action.payload;
    },
  },
});

export default plasticPipeSlice.reducer;
