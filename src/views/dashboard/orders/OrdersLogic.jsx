import useOrderQuery from "../../../hooks/orders/useOrderQuery";
import Orders from "./Orders";

const OrdersLogic = () => {
  const {
    orderQuery,
    filter,
    fetchOrderFilter,
    setCurrentOrderId,
    currentOrderId,
    getOneOrderQuery,
  } = useOrderQuery();
  return (
    <Orders
      data={orderQuery.data}
      filter={filter}
      fetchOrderFilter={fetchOrderFilter}
      setCurrentOrderId={setCurrentOrderId}
      currentOrderId={currentOrderId}
      getOneOrderQuery={getOneOrderQuery}
    />
  );
};

export default OrdersLogic;
