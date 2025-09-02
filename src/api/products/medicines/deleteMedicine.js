import axiosClient from "../../../libs/axios/axios-client";

async function deleteMedicines({ medicineId }) {
  const res = await axiosClient.delete();

  return res?.data;
}

export default deleteMedicines;
