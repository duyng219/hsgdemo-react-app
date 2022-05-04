import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { paintService } from "../../services/PaintService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllPaintList = createAsyncThunk(
  "/paints/fetchPaint",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await paintService.getAllPaint();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOnePaint = createAsyncThunk(
  "/paints/getOnePaint",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await paintService.getOnePaint(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePaint = createAsyncThunk(
  "/paints/updatePaint",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await paintService.updatePaint(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createPaint = createAsyncThunk(
  "/paints/createPaint",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await paintService.createPaint(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  paintList: [],
  paint: {},
};
export const paintSlice = createSlice({
  name: "paint",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPaintList.fulfilled.type]: (state, action) => {
      state.paintList = action.payload;
    },
    [getOnePaint.fulfilled.type]: (state, action) => {
      state.paint = action.payload;
    },
  },
});

export default paintSlice.reducer;
