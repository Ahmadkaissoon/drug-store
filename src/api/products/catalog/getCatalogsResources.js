import axiosClient from "../../../libs/axios/axios-client";

async function getCatalogsResources() {
  const res = await axiosClient.get(`/labs`);

  return res?.data?.data;
}

export default getCatalogsResources;
