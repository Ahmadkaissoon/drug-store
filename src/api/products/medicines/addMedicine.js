import axiosClient from "../../../libs/axios/axios-client";

async function addMedicines({ data }) {
  // Ensure data is always an array
  const medicinesArray = Array.isArray(data) ? data : [data];

  console.log("Sending data:", medicinesArray);

  const res = await axiosClient.post("/stock", medicinesArray, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res?.data ?? {};
}

export default addMedicines;
