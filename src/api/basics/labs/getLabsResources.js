import axiosClient from "../../../libs/axios/axios-client";

async function getLabsResources() {
  const res = await axiosClient.get(`/cities`);

  // console.log(res);

  return res?.data?.data;
}

export default getLabsResources;
