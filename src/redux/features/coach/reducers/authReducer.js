import { createSlice } from "@reduxjs/toolkit";
import {
  authForgotPassword,
  authSignin,
  contactUs,
  fetchCoachCategories,
  handleCoachSignUp,
  handlePurchasePlanCoach,
  handlePurchasePlanData,
  registerToday,
  setPassword,
  shareOtp,
} from "../actions/authAction";

const initialState = {
  isLoading: false,
  categoryList: [],
  subscriptionPlan: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    // register-today
    builder.addCase(registerToday.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerToday.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(registerToday.rejected, (state, action) => {
      state.isLoading = false;
    });
    // contact-us
    builder.addCase(contactUs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(contactUs.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(contactUs.rejected, (state, action) => {
      state.isLoading = false;
    });
    // auth-sign-in
    builder.addCase(authSignin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authSignin.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(authSignin.rejected, (state, action) => {
      state.isLoading = false;
    });
    // authForgotPassword
    builder.addCase(authForgotPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authForgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(authForgotPassword.rejected, (state, action) => {
      state.isLoading = false;
    });
    // share-otp
    builder.addCase(shareOtp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(shareOtp.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(shareOtp.rejected, (state, action) => {
      state.isLoading = false;
    });
    // set-password
    builder.addCase(setPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(setPassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(setPassword.rejected, (state, action) => {
      state.isLoading = false;
    });
    // get-coach-categories
    builder.addCase(fetchCoachCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoachCategories.fulfilled, (state, action) => {
      const { data } = action.payload || {};
      state.categoryList = data || [];
      state.isLoading = false;
    });
    builder.addCase(fetchCoachCategories.rejected, (state, action) => {
      state.isLoading = false;
    });

    // handleCoachSignUp
    builder.addCase(handleCoachSignUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(handleCoachSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(handleCoachSignUp.rejected, (state, action) => {
      state.isLoading = false;
    });

    // handlePurchasePlanData
    builder.addCase(handlePurchasePlanData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(handlePurchasePlanData.fulfilled, (state, action) => {
      const { data } = action.payload || {};
      state.subscriptionPlan = data ?? [];
      state.isLoading = false;
    });
    builder.addCase(handlePurchasePlanData.rejected, (state, action) => {
      state.isLoading = false;
    });

    // handlePurchasePlanCoach
    builder.addCase(handlePurchasePlanCoach.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(handlePurchasePlanCoach.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(handlePurchasePlanCoach.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
