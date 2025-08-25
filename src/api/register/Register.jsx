import axiosClient from "../../libs/axios/axios-client";

async function RegisterFunction({ navigate, data, previousPage }) {
  const formData = new FormData();
  Object.keys(data)?.map((key) => {
    formData.append(key, data[key]);
  });
  const res = await axiosClient.post("auth/register", formData);
  navigate(previousPage ?? "/");
  return { data: res?.data };
}

export default RegisterFunction;
