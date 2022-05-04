import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { interiorBrickService } from "../../services/InteriorBrickService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllInteriorBrickList = createAsyncThunk(
  "/interiorBricks/fetchInteriorBrick",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await interiorBrickService.getAllInteriorBrick();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneInteriorBrick = createAsyncThunk(
  "/interiorBricks/getOneInteriorBrick",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await interiorBrickService.getOneInteriorBrick(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateInteriorBrick = createAsyncThunk(
  "/interiorBricks/updateInteriorBrick",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await interiorBrickService.updateInteriorBrick(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createInteriorBrick = createAsyncThunk(
  "/interiorBricks/createInteriorBrick",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await interiorBrickService.createInteriorBrick(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  interiorBrickList: [],
  interiorBrick: {},
};
export const interiorBrickSlice = createSlice({
  name: "interiorBrick",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllInteriorBrickList.fulfilled.type]: (state, action) => {
      state.interiorBrickList = action.payload;
    },
    [getOneInteriorBrick.fulfilled.type]: (state, action) => {
      state.interiorBrick = action.payload;
    },
  },
});

export default interiorBrickSlice.reducer;
