import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { lavaboService } from "../../services/LavaboService";
import { hideLoading, showLoading } from "./loadingSlice";
import { notiFunc } from "../../utils/settings/notification/notiFunc";

export const getAllLavaboList = createAsyncThunk(
  "/lavabos/fetchLavabo",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await lavaboService.getAllLavabos();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneLavabo = createAsyncThunk(
  "/lavabos/getOneLavabo",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await lavaboService.getOneLavabo(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateLavabo = createAsyncThunk(
  "/lavabos/updateLavabo",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await lavaboService.updateLavabo(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createLavabo = createAsyncThunk(
  "/lavabos/createLavabo",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await lavaboService.createLavabo(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  lavaboList: [],
  lavabo: {},
};
export const lavaboSlice = createSlice({
  name: "lavabo",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllLavaboList.fulfilled.type]: (state, action) => {
      state.lavaboList = action.payload;
    },
    [getOneLavabo.fulfilled.type]: (state, action) => {
      state.lavabo = action.payload;
    },
  },
});

export default lavaboSlice.reducer;
