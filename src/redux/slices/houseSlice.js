import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { houseService } from "../../services/HouseService";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllHouseList = createAsyncThunk(
  "/house/fetchHouse",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await houseService.getAllHouse();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getDetailHouse = createAsyncThunk(
  "/house/getDetailHouse",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await houseService.getOneHouse(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  houseList: [],
  house: {},
};
export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllHouseList.fulfilled.type]: (state, action) => {
      state.houseList = action.payload;
    },

    [getDetailHouse.fulfilled.type]: (state, action) => {
      state.house = action.payload;
    },
  },
});

export default houseSlice.reducer;
