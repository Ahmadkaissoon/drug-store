import axiosClient from "../../libs/axios/axios-client";

async function addOrder({ data }) {
  const formData = new FormData();
  Object.keys(data).map((key) => {
    if (key == "products") {
      data["order_products"]?.map((item, index) => {
        Object.keys(item).map((key) => {
          if (item[key] !== undefined && item[key] !== null)
            formData.append(
              "order_products[" + index + "][" + key + "]",
              item[key]
            );
          else
            formData.append("order_products[" + index + "][" + key + "]", "");
        });
      });
    } else if (data[key] !== undefined && data[key] !== null) {
      formData.append(key, data[key]);
    }
  });
  const res = await axiosClient.post(`/order`, formData);

  return res?.data;
}

export default addOrder;
