import axiosClient from "../../../libs/axios/axios-client";

async function deleteMedicine({ medicineId }) {
  const res = await axiosClient.delete();

  return res?.data;
}

export default deleteMedicine;
