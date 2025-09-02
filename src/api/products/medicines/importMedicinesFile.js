import axiosClient from "../../../libs/axios/axios-client";

async function importMedicinesFile({ data }) {
  const formData = new FormData();
  Object.keys(data).map((key) => {
    if (data[key] !== undefined && data[key] !== null)
      formData.append(key, data[key][0]);
  });

  const res = await axiosClient.post(``, formData);

  return res?.data;
}

export default importMedicinesFile;
