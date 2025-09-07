import axiosClient from "@/libs/axios/axios-client";

// logout api call function
// gets: data of logout contains userName/email and password
async function logoutFunction() {
  try {
    const res = await axiosClient.post(`/logout`);

    return res?.data;
  } catch (err) {
    return { data: "success" };
  }
}

export default logoutFunction;
