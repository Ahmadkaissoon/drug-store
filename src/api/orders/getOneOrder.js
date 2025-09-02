import axiosClient from "../../libs/axios/axios-client";

async function getOneOrder({ currentOrderId }) {
  const res = await axiosClient.get();

  return res?.data;
}

export default getOneOrder;
