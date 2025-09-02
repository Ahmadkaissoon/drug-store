import axiosClient from "../../../libs/axios/axios-client";

async function getOnePharmacy({ pharmacyId }) {
  const res = await axiosClient.post(`/clients/${pharmacyId}`);

  return res?.data?.data;
}

export default getOnePharmacy;
