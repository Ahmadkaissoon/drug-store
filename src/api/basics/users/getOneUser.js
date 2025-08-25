import axiosClient from "../../../libs/axios/axios-client";

async function getOneUser({ userId }) {
  const res = await axiosClient.post();

  return res?.data?.data;
}

export default getOneUser;
