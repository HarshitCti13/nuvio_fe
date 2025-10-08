import { combineReducers } from '@reduxjs/toolkit';
import authReducer from "../coach/reducers/authReducer"
const coachReducer = combineReducers({
  auth: authReducer,
});

export default coachReducer;
