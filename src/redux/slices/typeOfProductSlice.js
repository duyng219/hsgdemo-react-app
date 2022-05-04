import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { typeOfProductService } from "../../services/TypeOfProductService";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllTypeOfProductList = createAsyncThunk(
  "/typeOfProducts/fetchTypeOfProduct",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;

    try {
      dispatch(showLoading());
      const response = await typeOfProductService.getAllTypeOfProduct();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneTypeOfProduct = createAsyncThunk(
  "/typeOfProducts/getOneTypeOfProduct",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await typeOfProductService.getOneTypeOfProduct(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateTypeOfProduct = createAsyncThunk(
  "/typeOfProducts/updateTypeOfProduct",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await typeOfProductService.updateTypeOfProduct(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

export const createTypeOfProduct = createAsyncThunk(
  "/typeOfProducts/createTypeOfProduct",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await typeOfProductService.createTypeOfProduct(data);
      dispatch(hideLoading());
      notiFunc("success", "Tạo thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  typeList: [],
  typeOfProduct: {},
};
export const typeOfProductSlice = createSlice({
  name: "typeOfProduct",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTypeOfProductList.fulfilled.type]: (state, action) => {
      state.typeList = action.payload;
    },
    [getOneTypeOfProduct.fulfilled.type]: (state, action) => {
      state.typeOfProduct = action.payload;
    },
  },
});

export default typeOfProductSlice.reducer;
