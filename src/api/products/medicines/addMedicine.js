import axiosClient from "../../../libs/axios/axios-client";

async function addMedicines({ data }) {
  const formData = new FormData();

  // Ensure data is always an array
  const medicinesArray = Array.isArray(data) ? data : [data];

  // Append serialized array of objects
  formData.append("data", JSON.stringify(medicinesArray));

  // Debugging: print FormData properly
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  const res = await axiosClient.post(`/stock`, formData);
  return res?.data ?? {};
}

export default addMedicines;
