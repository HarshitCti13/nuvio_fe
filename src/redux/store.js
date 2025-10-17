import coachReducer from "./features/coach";
import adminReducer from "./features/admin";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    coach: coachReducer,
    admin: adminReducer,
  },
});
