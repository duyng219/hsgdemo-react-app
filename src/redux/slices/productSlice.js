import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/ProductService";
import { hideLoading, showLoading } from "./loadingSlice";

export const getAllProductList = createAsyncThunk(
  "/product/fetchProduct",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await productService.getAllProducts();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  productList: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProductList.fulfilled.type]: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export default productSlice.reducer;
