import axiosClient from "../../../libs/axios/axios-client";

async function getProductMedicine() {
  const res = await axiosClient.get(``);

  return res?.data?.data;
}

export default getProductMedicine;
