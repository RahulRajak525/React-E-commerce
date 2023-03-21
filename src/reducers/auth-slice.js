import { createSlice } from "@reduxjs/toolkit";
import { getUserProfileAction, userLoginAction } from "./asyncAuthReducer";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userProfileData: undefined,
    userLoginData: undefined,
    isLoading: false,
  },
  reducers: {
    userLogout(state, action) {
      localStorage.removeItem("idToken");
      state.userLoginData = undefined;
      state.userProfileData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.userLoginData = response;
      localStorage.setItem("idToken", response.idToken);
    });
    builder.addCase(getUserProfileAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.userProfileData = response;
      state.isLoading = false;
    });
    builder.addCase(getUserProfileAction.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});
export default authSlice;
export const authActions = authSlice.actions;
