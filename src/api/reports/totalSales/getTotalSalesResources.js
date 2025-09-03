import axiosClient from "../../../libs/axios/axios-client";

async function getTotalSalesResources() {
  const res = await axiosClient.get(``);

  return res?.data?.data;
}

export default getTotalSalesResources;
