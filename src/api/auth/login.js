import axiosClient from "@/libs/axios/axios-client";

// login api call function
// gets: data of login contains userName/email and password
async function loginFunction({ data }) {
  const formData = new FormData();
  Object.keys(data)?.map((key) => {
    formData.append(key, data[key]);
  });

  const res = await axiosClient.post(`/login`, formData);

  return { user: res.data };
}

export default loginFunction;
