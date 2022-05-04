import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doorService } from "../../services/DoorService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllDoorList = createAsyncThunk(
  "/doors/fetchDoor",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;

    try {
      dispatch(showLoading());
      const response = await doorService.getAllDoors();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneDoor = createAsyncThunk(
  "/doors/getOneDoor",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await doorService.getOneDoor(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateDoor = createAsyncThunk(
  "/doors/updateDoor",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await doorService.updateDoor(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createDoor = createAsyncThunk(
  "/doors/createDoor",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await doorService.createDoor(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  doorList: [],
  door: {},
};
export const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllDoorList.fulfilled.type]: (state, action) => {
      state.doorList = action.payload;
    },
    [getOneDoor.fulfilled.type]: (state, action) => {
      state.door = action.payload;
    },
  },
});

export default doorSlice.reducer;
