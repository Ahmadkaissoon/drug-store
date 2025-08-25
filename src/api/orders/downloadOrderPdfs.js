import axiosClient from "../../libs/axios/axios-client";

// downolad sale pdf file api call function, gets: id of the sale invoice that we want to download its pdf file
// returns: sale pdf file
async function downloadOrderPdfs({ orderId }) {
  //   const res = await axiosClient.get(
  //     `/sale-invoices/download-sale-invoice-pdf/${orderId}`,
  //     {
  //       headers: {
  //         Accept: "*/*",
  //       },
  //     }
  //   );

  return res?.data;
}

export default downloadOrderPdfs;
