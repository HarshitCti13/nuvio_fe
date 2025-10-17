import { createSlice } from "@reduxjs/toolkit";
import { authSignin, fetchCoachies, getWebinarAllData, updateCoachStatus } from "../actions/authAction";

const initialState = {
  allWebinarList: [],
  isLoading: false,
  coachList: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {

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

    // fetch-couches
    builder.addCase(fetchCoachies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCoachies.fulfilled, (state, action) => {
      const { data } = action.payload || {}
      state.coachList = data || []
      state.isLoading = false;
    });
    builder.addCase(fetchCoachies.rejected, (state, action) => {
      state.isLoading = false;
    });

    // updateCoachStatus
    builder.addCase(updateCoachStatus.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateCoachStatus.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateCoachStatus.rejected, (state, action) => {
      state.isLoading = false;
    });

    // getWebinarAllData
    builder.addCase(getWebinarAllData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getWebinarAllData.fulfilled, (state, action) => {
      const { data } = action.payload || {}
      state.allWebinarList = data || []
      state.isLoading = false;
    });
    builder.addCase(getWebinarAllData.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
