import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { floorBrickService } from "../../services/FloorBrickService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllFloorBrickList = createAsyncThunk(
  "/floorBricks/fetchFloorBrick",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await floorBrickService.getAllFloorBrick();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneFloorBrick = createAsyncThunk(
  "/floorBricks/getOnefloorBrick",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await floorBrickService.getOneFloorBrick(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateFloorBrick = createAsyncThunk(
  "/floorBricks/updatefloorBrick",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await floorBrickService.updateFloorBrick(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createFloorBrick = createAsyncThunk(
  "/floorBricks/createfloorBrick",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await floorBrickService.createFloorBrick(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  floorBrickList: [],
  floorBrick: {},
};
export const floorBrickSlice = createSlice({
  name: "floorBrick",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllFloorBrickList.fulfilled.type]: (state, action) => {
      state.floorBrickList = action.payload;
    },
    [getOneFloorBrick.fulfilled.type]: (state, action) => {
      state.floorBrick = action.payload;
    },
  },
});

export default floorBrickSlice.reducer;
