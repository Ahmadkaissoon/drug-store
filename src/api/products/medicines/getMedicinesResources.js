import axiosClient from "../../../libs/axios/axios-client";

async function getMedicinesResoucres() {
  const res = await axiosClient.get(`/stock`);

  return res?.data?.data;
}

export default getMedicinesResoucres;
