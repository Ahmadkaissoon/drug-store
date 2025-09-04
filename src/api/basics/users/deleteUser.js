import axiosClient from "../../../libs/axios/axios-client";

async function deleteUsers({ userId }) {
  const res = await axiosClient.delete(`/users/${userId}`);

  return res?.data;
}

export default deleteUsers;
