import axiosClient from "../../libs/axios/axios-client";

async function deleteOrder({ orderId }) {
  const res = await axiosClient.delete(`order/${orderId}`);

  return res?.data;
}

export default deleteOrder;
