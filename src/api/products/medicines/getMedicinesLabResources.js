import axiosClient from "../../../libs/axios/axios-client";

async function getMedicinesLabsResources() {
  const res = await axiosClient.get(`/labs`);

  return res?.data?.data;
}

export default getMedicinesLabsResources;
