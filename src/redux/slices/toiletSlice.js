import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toiletService } from "../../services/ToiletService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllToiletList = createAsyncThunk(
  "/toilets/fetchToilet",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await toiletService.getAllToilet();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneToilet = createAsyncThunk(
  "/toilets/getOneToilet",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await toiletService.getOneToilet(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateToilet = createAsyncThunk(
  "/toilets/updateToilet",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await toiletService.updateToilet(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createToilet = createAsyncThunk(
  "/toilets/createtoilet",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await toiletService.createToilet(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  toiletList: [],
  toilet: {},
};
export const toiletSlice = createSlice({
  name: "toilet",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllToiletList.fulfilled.type]: (state, action) => {
      state.toiletList = action.payload;
    },
    [getOneToilet.fulfilled.type]: (state, action) => {
      state.toilet = action.payload;
    },
  },
});

export default toiletSlice.reducer;
