import axiosClient from "../../../libs/axios/axios-client";

async function getMostImportedResources() {
  const res = await axiosClient.get(``);

  return res?.data?.data;
}

export default getMostImportedResources;
