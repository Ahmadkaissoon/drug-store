import axiosClient from "../../../libs/axios/axios-client";

async function getCatalogs() {
  const res = await axiosClient.get(`/prods`);

  return res?.data?.data;
}

export default getCatalogs;
