import axiosClient from "../../../libs/axios/axios-client";

async function getUsersResources() {
  const res = await axiosClient.get(``);

  return res?.data?.data;
}

export default getUsersResources;
