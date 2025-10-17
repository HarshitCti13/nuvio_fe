import { API_REQUEST } from "../..";
import { setProfile, setToken } from "../../../../utils/pip";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminLoginAPI, coachiesAPI, getAllWebinarListAPI, updateCoachStatusAPI } from "../../../../routes/apiurls";

// auth-signin
export const authSignin = createAsyncThunk("auth-signin", async (props) => {
  const { payload, callback } = props;
  try {
    const response = await API_REQUEST({
      url: adminLoginAPI,
      method: "POST",
      data: payload,
    });

    setToken("admin", response?.data?.token);
    setProfile("admin", response?.data?.adminData);
    callback(response);
    return response;
  } catch (error) {
    callback(null, error);
  }
});

export const fetchCoachies = createAsyncThunk(
  "fetch-couchies",
  async (props) => {
    try {
      const response = await API_REQUEST({
        url: coachiesAPI,
        method: "GET",
        isSuccessToast: false,
      });
      return response;
    } catch (error) { }
  }
);

export const updateCoachStatus = createAsyncThunk(
  "update-couch-status",
  async (props) => {
    const { payload, callback } = props;
    try {
      const response = await API_REQUEST({
        url: updateCoachStatusAPI,
        data: payload,
        method: "POST",
      });
      callback(response);
      return response;
    } catch (error) {
      callback(null, error);
    };
  }
);

export const getWebinarAllData = createAsyncThunk(
  "fetch-webinar",
  async (props) => {
    try {
      const response = await API_REQUEST({
        url: getAllWebinarListAPI,
        method: "GET",
        isSuccessToast: false,
      });
      return response;
    } catch (error) { }
  }
);