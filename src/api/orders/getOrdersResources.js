import axiosClient from "../../libs/axios/axios-client";

async function getOrdersResources() {
  const res = await axiosClient.get(`/clients`);

  return res?.data?.data;
}

export default getOrdersResources;
