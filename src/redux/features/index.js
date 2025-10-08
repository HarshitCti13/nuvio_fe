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
  
  const token = getToken("coach");
  console.log({token :  getToken("coach")})

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
    console.log({response})
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
            // window.location.href = "/";
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
