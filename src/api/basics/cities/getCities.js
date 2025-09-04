import axiosClient from "../../../libs/axios/axios-client";

async function getCities({ queryKey }) {
  // const formData = new FormData();

  // Object.keys(queryKey[1]).map((key) => {
  //   if (queryKey[1][key] !== null && queryKey[1][key] !== undefined)
  //     formData.append(key, queryKey[1][key]);
  // });

  const filter = queryKey[1];
  // console.log("API request would send:", filter);

  const res = await axiosClient.get(`/cities`, { params: filter });

  return res?.data?.data;
}

export default getCities;
