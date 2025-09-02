import axiosClient from "../../libs/axios/axios-client";

async function getHeaderNotifications() {
  const res = await axiosClient.get(``);

  return res?.data?.data;
}

export default getHeaderNotifications;
