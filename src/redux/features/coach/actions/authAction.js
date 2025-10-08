import { API_REQUEST } from "../..";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactUsAPI, webinarAPI } from "../../../../routes/apiurls";

// register-today
export const registerToday = createAsyncThunk("register-today", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: webinarAPI,
      method: "POST",
      data: payload,
      isSuccessToast:false
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});
// contact-us
export const contactUs = createAsyncThunk("contact-us", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: contactUsAPI,
      method: "POST",
      data: payload,
      // isSuccessToast:false
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});
