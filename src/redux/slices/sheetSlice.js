import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sheetService } from "../../services/SheetService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllSheetList = createAsyncThunk(
  "/sheets/fetchSheet",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await sheetService.getAllSheet();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneSheet = createAsyncThunk(
  "/sheets/getOneSheet",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await sheetService.getOneSheet(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSheet = createAsyncThunk(
  "/sheets/updateSheet",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await sheetService.updateSheet(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createSheet = createAsyncThunk(
  "/sheets/createSheet",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await sheetService.createSheet(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  sheetList: [],
  sheet: {},
};
export const SheetSlice = createSlice({
  name: "sheet",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllSheetList.fulfilled.type]: (state, action) => {
      state.sheetList = action.payload;
    },
    [getOneSheet.fulfilled.type]: (state, action) => {
      state.sheet = action.payload;
    },
  },
});

export default SheetSlice.reducer;
