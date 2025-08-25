import axiosClient from "../../../libs/axios/axios-client";

async function getOneMedicine({ currentMedicinesId }) {
  const res = await axiosClient.post();

  return res?.data?.data;
}

export default getOneMedicine;
