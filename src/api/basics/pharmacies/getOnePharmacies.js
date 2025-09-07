import axiosClient from "../../../libs/axios/axios-client";

async function getOnePharmacy({ currentPharmacyId }) {
  const res = await axiosClient.get(`/clients/${currentPharmacyId}`);

  return res?.data;
}

export default getOnePharmacy;
