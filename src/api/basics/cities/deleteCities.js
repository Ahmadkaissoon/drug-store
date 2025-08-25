import axiosClient from "../../../libs/axios/axios-client";

async function deleteCities({ cityId }) {
  const res = await axiosClient.delete();

  return res?.data;
}

export default deleteCities;
