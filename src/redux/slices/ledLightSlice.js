import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ledLightService } from "../../services/LedLightService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllLedLightList = createAsyncThunk(
  "/ledLights/fetchLedLight",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;

    try {
      dispatch(showLoading());
      const response = await ledLightService.getAllLedLight();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneLedLight = createAsyncThunk(
  "/ledLights/getOneLedLight",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await ledLightService.getOneLedLight(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateLedLight = createAsyncThunk(
  "/ledLights/updateLedLight",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await ledLightService.updateLedLight(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createLedLight = createAsyncThunk(
  "/ledLights/createLedLight",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await ledLightService.createLedLight(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  ledLightList: [],
  ledLight: {},
};
export const ledLightSlice = createSlice({
  name: "ledLight",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllLedLightList.fulfilled.type]: (state, action) => {
      state.ledLightList = action.payload;
    },
    [getOneLedLight.fulfilled.type]: (state, action) => {
      state.ledLight = action.payload;
    },
  },
});

export default ledLightSlice.reducer;
