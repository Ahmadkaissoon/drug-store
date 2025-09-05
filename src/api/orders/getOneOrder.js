import axiosClient from "../../libs/axios/axios-client";

async function getOneOrder({ currentOrderId }) {
  const res = await axiosClient.get(`/order/${currentOrderId}`);
  console.log(res);
  return res?.data;
}

export default getOneOrder;
