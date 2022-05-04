import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showerService } from "../../services/ShowerService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllShowerList = createAsyncThunk(
  "/showers/fetchShower",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await showerService.getAllShower();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneShower = createAsyncThunk(
  "/showers/getOneShower",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await showerService.getOneShower(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateShower = createAsyncThunk(
  "/showers/updateShower",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await showerService.updateShower(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createShower = createAsyncThunk(
  "/showers/createShower",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await showerService.createShower(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  showerList: [],
  shower: {},
};
export const ShowerSlice = createSlice({
  name: "shower",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllShowerList.fulfilled.type]: (state, action) => {
      state.showerList = action.payload;
    },
    [getOneShower.fulfilled.type]: (state, action) => {
      state.shower = action.payload;
    },
  },
});

export default ShowerSlice.reducer;
