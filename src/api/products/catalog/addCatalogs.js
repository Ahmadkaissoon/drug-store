import axiosClient from "../../../libs/axios/axios-client";

async function addCatalogs({ data }) {
  const formData = new FormData();
  Object.keys(data).map((key) => {
    if (data[key] !== undefined && data[key] !== null)
      formData.append(key, data[key]);
  });

  const res = await axiosClient.post(`/prods`, formData);

  return res?.data;
}

export default addCatalogs;
