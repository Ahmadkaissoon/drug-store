import axiosClient from "../../../libs/axios/axios-client";

async function deleteCatalogs({ catalogId }) {
  console.log(catalogId);
  const res = await axiosClient.delete(`/prods/${catalogId}`);

  return res?.data;
}

export default deleteCatalogs;
