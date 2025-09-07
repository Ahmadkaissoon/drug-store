import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export const refreshAccessToken = async () => {
  try {
    const refreshTokenItem = secureLocalStorage.getItem("REFRESH_TOKEN");
    const refreshToken =
      refreshTokenItem &&
      typeof refreshTokenItem === "object" &&
      "data" in refreshTokenItem
        ? refreshTokenItem.data
        : null;

    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(`/refresh`, {
      refresh: refreshToken,
    });

    const data = response.data;

    secureLocalStorage.setItem("ACCESS_TOKEN", { data: data?.access });
    secureLocalStorage.setItem("REFRESH_TOKEN", { data: data?.refresh });
    secureLocalStorage.setItem("USER", { data: data });

    return access;
  } catch (error) {
    secureLocalStorage.removeItem("ACCESS_TOKEN");
    secureLocalStorage.removeItem("REFRESH_TOKEN");
    secureLocalStorage.removeItem("USER");
    throw error;
  }
};
