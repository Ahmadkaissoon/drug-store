import axiosClient from "../../../libs/axios/axios-client";

async function getOnePharmacy({ pharmacyId }) {
  const res = await axiosClient.post(``);

  return res?.data?.data;
}

export default getOnePharmacy;
