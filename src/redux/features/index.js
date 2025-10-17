import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../../routes/apiurls";
import { getToken } from "../../utils/pip";

export const API_REQUEST = async (props) => {
  const {
    url,
    method,
    data,
    headers,
    params,
    isErrorToast = true,
    isSuccessToast = true,
  } = props;

  const getCurrentPanel = () => {
    const list = ["coach", "admin"]
    const path = window.location.pathname;
    const panel = path.split("/")[1];
    return list?.includes(panel) ? panel : "coach";
  };
  const token = getToken(getCurrentPanel());
  console.log({ token })
  const requestOptions = {
    url: BASE_URL + url,
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    params: method === "GET" ? params : undefined,
    data: method !== "GET" ? data : undefined,
  };
  try {
    const response = await axios(requestOptions);
    if (isSuccessToast && method !== "GET") {
      const isSuccess =
        response?.data?.success ?? response?.data?.status ?? false;
      const message = response?.data?.message;

      if (isSuccess) {
        toast.success(message || "Operation successful");
      } else {
        toast.error(message || "Something went wrong");
      }
    }
    return response?.data;
  } catch (error) {
    if (isErrorToast) {
      if (error.response) {
        if (error?.response?.data?.status === 401) {
          // if(getCurrentPanel() != "guest"){
          toast.error(error?.response?.data?.message);
          // clearAuth(getCurrentPanel());
          // }
          return;
        }
        toast.error(error?.response?.data?.message);
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error("Error:", error.message);
      }
    }
    throw error.response;
  }
};
