import axiosClient from "../../../libs/axios/axios-client";

async function deleteLabs({ labId }) {
  const res = await axiosClient.delete(`/labs/${labId}`);

  return res?.data;
}

export default deleteLabs;
