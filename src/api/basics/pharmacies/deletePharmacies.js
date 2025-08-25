import axiosClient from "../../../libs/axios/axios-client";

async function deletePharmacy({ pharmacyId }) {
  const res = await axiosClient.delete();

  return res?.data;
}

export default deletePharmacy;
