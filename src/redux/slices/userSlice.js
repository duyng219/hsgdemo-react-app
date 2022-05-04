import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/UserServices";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import { hideLoading, showLoading } from "./loadingSlice";
import history from "../../history";

export const userLogin = createAsyncThunk(
  "/users/userLogin",
  async (dataInfo, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const { data } = await userService.login(dataInfo);
      localStorage.setItem("hoasen-user-logged", JSON.stringify(data));
      dispatch(hideLoading());
      notiFunc("success", "Đăng nhập thành công");
      history.push("/");
    } catch (error) {
      notiFunc("error", error.response.data.message);
      dispatch(hideLoading());
    }
  }
);

export const userRegister = createAsyncThunk(
  "/users/userRegister",
  async (dataInfo, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await userService.register(dataInfo);
      dispatch(hideLoading());
      notiFunc("success", "Đăng kí thành công");
    } catch (error) {
      notiFunc("error", error.response.data.message);
      dispatch(hideLoading());
    }
  }
);

export const getAllUserList = createAsyncThunk(
  "/users/fetchUser",
  async (_, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await userService.getAllUsers();
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getOneUser = createAsyncThunk(
  "/users/getOneUser",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      const response = await userService.getOneUser(id);
      dispatch(hideLoading());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "/users/deleteUser",
  async (id, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;

    try {
      await userService.deleteUser(id);
      dispatch(showLoading());
      notiFunc("success", "Xóa thành công");
      dispatch(getAllUserList());
      setTimeout(() => {
        dispatch(hideLoading());
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "/users/updateUser",
  async (data, thunkAPI) => {
    const dispatch = thunkAPI.dispatch;
    try {
      dispatch(showLoading());
      await userService.updateUser(data.id, data.inputValue);
      dispatch(hideLoading());
      notiFunc("success", "Cập nhật thành công");
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  userList: [],
  user: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUserList.fulfilled.type]: (state, action) => {
      state.userList = action.payload;
    },
    [getOneUser.fulfilled.type]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
