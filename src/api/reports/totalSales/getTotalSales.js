import axiosClient from "../../../libs/axios/axios-client";

async function getTotalSales() {
  const formData = new FormData();
  const res = await axiosClient.post();
  return res?.data?.data;
}

export default getTotalSales;
