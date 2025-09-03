import axiosClient from "../../../libs/axios/axios-client";

async function getUsers({ queryKey }) {
  // const formData = new FormData();
  // Object.keys(queryKey[1]).map((key) => {
  //   if (queryKey[1][key] !== null && queryKey[1][key] !== undefined)
  //     formData.append(key, queryKey[1][key]);
  // });
  const filter = queryKey[1];
  const res = await axiosClient.post(`/users`, { params: filter });

  return res?.data?.data;
}

export default getUsers;
