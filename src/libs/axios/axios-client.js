import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import jsonParse from "../../functions/common/jsonParse";
import { debounce } from "lodash";

let SHOW_NETWORK_ERROR = true;
async function setShowNetworkErrorTrue() {
  SHOW_NETWORK_ERROR = true;
}

const axiosClient = axios.create({
  // importing the base api url from env
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});

export const axiosClientWithoutToken = axios.create({
  // importing the base api url from env
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});

axiosClient.interceptors.request.use((config) => {
  const token = jsonParse(secureLocalStorage.getItem("ACCESS_TOKEN"))?.data;
  // check if the api call require token and put it in header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosClientWithoutToken.interceptors.response.use(
  async (response) => {
    return Promise.resolve(response);
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle token refresh for 401 errors
    if (error?.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosClientWithoutToken(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const newAccessToken = await refreshAccessToken();

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        processQueue(null, newAccessToken);

        return axiosClientWithoutToken(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);

        secureLocalStorage.removeItem("ACCESS_TOKEN");
        secureLocalStorage.removeItem("REFRESH_TOKEN");
        secureLocalStorage.removeItem("USER");

        if (window.location.pathname !== "/login") {
          window.location.replace(`${window.location.origin}/login`);
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    if (
      error?.response?.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      secureLocalStorage.removeItem("ACCESS_TOKEN");
      secureLocalStorage.removeItem("REFRESH_TOKEN");
      secureLocalStorage.removeItem("USER");
      window.location.replace(`${window.location.origin}/login`);
    }

    // Handle general errors messages
    if (error.code === "ERR_NETWORK" && SHOW_NETWORK_ERROR) {
      const err = { ...error, SHOW_NETWORK_ERROR };
      SHOW_NETWORK_ERROR = false;
      const debouncedFetch = debounce(setShowNetworkErrorTrue, 5000);
      debouncedFetch();
    }

    return Promise.reject(error);
  }
);

axiosClientWithoutToken.interceptors.response.use(
  async (response) => {
    return Promise.resolve(response);
  },
  async (error) => {
    // navigate to login page if the token is expired
    if (
      error?.response?.status === 401 &&
      window.location.pathname != "/login"
    ) {
      window.location.replace(`${window.location.origin}/login`);
    }
    let err = error;
    // handle general errors messages
    if (error.code == "ERR_NETWORK" && SHOW_NETWORK_ERROR) {
      err = { ...error, SHOW_NETWORK_ERROR: SHOW_NETWORK_ERROR };
      SHOW_NETWORK_ERROR = false;
      const debouncedFetch = debounce(setShowNetworkErrorTrue, 5000);
      debouncedFetch();
    }
    return Promise.reject(err);
  }
);
export default axiosClient;
