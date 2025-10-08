
import { configureStore } from "@reduxjs/toolkit";
import coachReducer from "./features/coach";

export const store = configureStore({
  reducer: {
    coach: coachReducer,
  },
});
