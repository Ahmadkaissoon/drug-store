import axiosClient from "../../../libs/axios/axios-client";

async function deletePharmacies({ pharmacyId }) {
  const res = await axiosClient.delete(`/clients/${pharmacyId}`);

  return res?.data;
}

export default deletePharmacies;
