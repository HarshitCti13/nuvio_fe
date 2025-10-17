import { combineReducers } from '@reduxjs/toolkit';
import authReducer from "../admin/reducers/authReducer"
const adminReducer = combineReducers({
  auth: authReducer,
});

export default adminReducer;
