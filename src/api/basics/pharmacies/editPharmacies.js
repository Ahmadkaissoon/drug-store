import axiosClient from "../../../libs/axios/axios-client";

async function editPharmacies({ pharmacyId, data }) {
  const formData = new FormData();
  Object.keys(data).map((key) => {
    if (data[key] !== undefined && data[key] !== null)
      formData.append(key, data[key]);
  });

  console.log(formData);

  const res = await axiosClient.patch(`/clients/${pharmacyId}`, formData);

  return res?.data;
}

export default editPharmacies;
