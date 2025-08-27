import axiosClient from "../../../libs/axios/axios-client";

async function editCities({ cityId, data }) {
  const formData = new FormData();
  Object.keys(data).map((key) => {
    if (data[key] !== undefined && data[key] !== null)
      formData.append(key, data[key]);
  });

  const res = await axiosClient.patch(`/cities/${cityId}`, formData);

  return res?.data;
}

export default editCities;
