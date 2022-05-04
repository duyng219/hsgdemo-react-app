import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { switchService } from "../../services/SwitchService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllSwitchList = createAsyncThunk(
  "/switches/fetchSwitch",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await switchService.getAllSwitch();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneSwitch = createAsyncThunk(
  "/switches/getOneSwitch",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await switchService.getOneSwitch(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSwitch = createAsyncThunk(
  "/switches/updateSwitch",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await switchService.updateSwitch(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createSwitch = createAsyncThunk(
  "/switches/createSwitch",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await switchService.createSwitch(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  switchList: [],
  oneSwitch: {},
};
export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllSwitchList.fulfilled.type]: (state, action) => {
      state.switchList = action.payload;
    },
    [getOneSwitch.fulfilled.type]: (state, action) => {
      state.oneSwitch = action.payload;
    },
  },
});

export default switchSlice.reducer;
