import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { interiorPaintService } from "../../services/InteriorPaintService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllInteriorPaintList = createAsyncThunk(
  "/interiorPaints/fetchInteriorPaint",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await interiorPaintService.getAllInteriorPaint();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneInteriorPaint = createAsyncThunk(
  "/interiorPaints/getOneInteriorPaint",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await interiorPaintService.getOneInteriorPaint(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateInteriorPaint = createAsyncThunk(
  "/interiorPaints/updateinteriorPaint",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await interiorPaintService.updateInteriorPaint(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createInteriorPaint = createAsyncThunk(
  "/interiorPaints/createinteriorPaint",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await interiorPaintService.createInteriorPaint(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  interiorPaintList: [],
  interiorPaint: {},
};
export const interiorPaintSlice = createSlice({
  name: "interiorPaint",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllInteriorPaintList.fulfilled.type]: (state, action) => {
      state.interiorPaintList = action.payload;
    },
    [getOneInteriorPaint.fulfilled.type]: (state, action) => {
      state.interiorPaint = action.payload;
    },
  },
});

export default interiorPaintSlice.reducer;
