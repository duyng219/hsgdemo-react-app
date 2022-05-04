import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { steelPipeService } from "../../services/SteelPipeService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllSteelPipeList = createAsyncThunk(
  "/steelPipes/fetchSteelPipe",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await steelPipeService.getAllSteelPipe();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneSteelPipe = createAsyncThunk(
  "/steelPipes/getOneSteelPipe",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await steelPipeService.getOneSteelPipe(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSteelPipe = createAsyncThunk(
  "/steelPipes/updateSteelPipe",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await steelPipeService.updateSteelPipe(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createSteelPipe = createAsyncThunk(
  "/steelPipes/createSteelPipe",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await steelPipeService.createSteelPipe(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  steelPipeList: [],
  steelPipe: {},
};
export const SteelPipeSlice = createSlice({
  name: "steelPipe",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllSteelPipeList.fulfilled.type]: (state, action) => {
      state.steelPipeList = action.payload;
    },
    [getOneSteelPipe.fulfilled.type]: (state, action) => {
      state.steelPipe = action.payload;
    },
  },
});

export default SteelPipeSlice.reducer;
