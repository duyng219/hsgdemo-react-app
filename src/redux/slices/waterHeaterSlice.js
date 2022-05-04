import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { waterHeaterService } from "../../services/WaterHeaterService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllWaterHeaterList = createAsyncThunk(
  "/waterHeaters/fetchWaterHeater",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await waterHeaterService.getAllWaterHeater();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneWaterHeater = createAsyncThunk(
  "/waterHeaters/getOneWaterHeater",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await waterHeaterService.getOneWaterHeater(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateWaterHeater = createAsyncThunk(
  "/waterHeaters/updateWaterHeater",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await waterHeaterService.updateWaterHeater(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createWaterHeater = createAsyncThunk(
  "/waterHeaters/createWaterHeater",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await waterHeaterService.createwaterHeater(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  waterHeaterList: [],
  waterHeater: {},
};
export const WaterHeaterSlice = createSlice({
  name: "waterHeater",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllWaterHeaterList.fulfilled.type]: (state, action) => {
      state.waterHeaterList = action.payload;
    },
    [getOneWaterHeater.fulfilled.type]: (state, action) => {
      state.waterHeater = action.payload;
    },
  },
});

export default WaterHeaterSlice.reducer;
