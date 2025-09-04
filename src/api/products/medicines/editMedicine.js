import axiosClient from "../../../libs/axios/axios-client";

async function editMedicinec({ medicineId, data }) {
  const formData = new FormData();
  Object.keys(data).map((key) => {
    if (data[key] !== undefined && data[key] !== null)
      formData.append(key, data[key]);
  });

  const res = await axiosClient.patch(`/stock/${medicineId}`, formData);

  return res?.data;
}

export default editMedicinec;
