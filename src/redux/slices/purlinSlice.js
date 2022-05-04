import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { purlinService } from "../../services/PurlinService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllPurlinList = createAsyncThunk(
  "/purlin/fetchPurlin",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await purlinService.getAllPurlin();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOnePurlin = createAsyncThunk(
  "/purlin/getOnePurlin",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await purlinService.getOnePurlin(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePurlin = createAsyncThunk(
  "/purlin/updatePurlin",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await purlinService.updatePurlin(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createPurlin = createAsyncThunk(
  "/purlin/createPurlin",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await purlinService.createPurlin(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  purlinList: [],
  purlin: {},
};
export const PurlinSlice = createSlice({
  name: "purlin",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPurlinList.fulfilled.type]: (state, action) => {
      state.purlinList = action.payload;
    },
    [getOnePurlin.fulfilled.type]: (state, action) => {
      state.purlin = action.payload;
    },
  },
});

export default PurlinSlice.reducer;
