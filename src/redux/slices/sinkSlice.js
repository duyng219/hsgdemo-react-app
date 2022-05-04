import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sinkService } from "../../services/SinkService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllSinkList = createAsyncThunk(
  "/sinks/fetchSink",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await sinkService.getAllSink();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneSink = createAsyncThunk(
  "/sinks/getOneSink",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await sinkService.getOneSink(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSink = createAsyncThunk(
  "/sinks/updateSink",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await sinkService.updateSink(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createSink = createAsyncThunk(
  "/sinks/createSink",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await sinkService.createSink(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  sinkList: [],
  sink: {},
};
export const sinkSlice = createSlice({
  name: "sink",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllSinkList.fulfilled.type]: (state, action) => {
      state.sinkList = action.payload;
    },
    [getOneSink.fulfilled.type]: (state, action) => {
      state.sink = action.payload;
    },
  },
});

export default sinkSlice.reducer;
