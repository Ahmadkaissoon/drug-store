import axiosClient from "../../../libs/axios/axios-client";

async function deletePharmacies({ pharmacyId }) {
  const res = await axiosClient.delete();

  return res?.data;
}

export default deletePharmacies;
