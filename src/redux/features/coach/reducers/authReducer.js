import { createSlice } from "@reduxjs/toolkit"
import { contactUs, registerToday } from "../actions/authAction";

const initialState = {
  isLoading: false,
}

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
    },
});

export default authSlice.reducer;