import { API_REQUEST } from "../..";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { coachCategoriesAPI, coachSignUpAPI, contactUsAPI, forgotPasswordAPI, getAllSubscriptionPlanAPI, loginAPI, purchaseCoachSubscriptionPlan, setPasswordAPI, shareOtpAPI, webinarAPI } from "../../../../routes/apiurls";
import { setToken } from "../../../../utils/pip";

// register-today
export const registerToday = createAsyncThunk("register-today", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: webinarAPI,
      method: "POST",
      data: payload,
      isSuccessToast: false
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

// auth-signin
export const authSignin = createAsyncThunk("auth-signin", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: loginAPI,
      method: "POST",
      data: payload,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

export const authForgotPassword = createAsyncThunk("auth-forgot-password", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: forgotPasswordAPI,
      method: "POST",
      data: payload,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

export const shareOtp = createAsyncThunk("share-otp", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: shareOtpAPI,
      method: "POST",
      data: payload,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

export const setPassword = createAsyncThunk("set-password", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: setPasswordAPI,
      method: "POST",
      data: payload,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

export const fetchCoachCategories = createAsyncThunk("fetch-couch-categories", async (props) => {
  try {
    const response = await API_REQUEST({
      url: coachCategoriesAPI,
      method: "GET",
      isSuccessToast: false,
    });
    return response;
  } catch (error) {
  }
});

export const handleCoachSignUp = createAsyncThunk("coach-signup", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: coachSignUpAPI,
      method: "POST",
      data: payload,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

export const handlePurchasePlanData = createAsyncThunk("coach-puchase-plan", async () => {
  try {
    const response = await API_REQUEST({
      url: getAllSubscriptionPlanAPI,
      method: "GET",
    });
    return response;
  } catch (error) {
  };
});

export const handlePurchasePlanCoach = createAsyncThunk("coach-purchase", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: purchaseCoachSubscriptionPlan,
      method: "POST",
      data: payload,
      isSuccessToast: false,
      isErrorToast: false,
    });
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});