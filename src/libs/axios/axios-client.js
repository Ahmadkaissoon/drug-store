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

axiosClient.interceptors.response.use(
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
