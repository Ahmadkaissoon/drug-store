import axiosClient from "@/libs/axios/axios-client";

// register api call function
// gets: data of register contains userName/email and password
async function registerFunction({ data }) {
  const formData = new FormData();
  Object.keys(data)?.map((key) => {
    formData.append(key, data[key]);
  });

  const res = await axiosClient.post(`/register`, formData);
  console.log({ res });
  return { user: res.data };
}

export default registerFunction;
