import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constructionSteelService } from "../../services/ConstructionSteelService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllConstructionSteelList = createAsyncThunk(
  "/constructionSteels/fetchConstructionSteel",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await constructionSteelService.getAllConstructionSteel();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneConstructionSteel = createAsyncThunk(
  "/ConstructionSteels/getOneConstructionSteel",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await constructionSteelService.getOneConstructionSteel(
        id
      );
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateConstructionSteel = createAsyncThunk(
  "/constructionSteels/updateConstructionSteel",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await constructionSteelService.updateConstructionSteel(
        data.id,
        data.inputValue
      );
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createConstructionSteel = createAsyncThunk(
  "/constructionSteels/createConstructionSteel",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await constructionSteelService.createConstructionSteel(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  constructionSteelList: [],
  constructionSteel: {},
};
export const constructionSteelReducer = createSlice({
  name: "constructionSteel",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllConstructionSteelList.fulfilled.type]: (state, action) => {
      state.constructionSteelList = action.payload;
    },
    [getOneConstructionSteel.fulfilled.type]: (state, action) => {
      state.constructionSteel = action.payload;
    },
  },
});

export default constructionSteelReducer.reducer;
