import useOrderQuery from "../../../hooks/orders/useOrderQuery";
import useOrderMutation from "../../../hooks/orders/useOrderMutation";
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
  const { handleAddOrder, handleEditOrder, handleDeleteOrder } =
    useOrderMutation();
  return (
    <Orders
      data={orderQuery.data}
      filter={filter}
      fetchOrderFilter={fetchOrderFilter}
      setCurrentOrderId={setCurrentOrderId}
      currentOrderId={currentOrderId}
      getOneOrderQuery={getOneOrderQuery}
      addOrder={handleAddOrder}
      editOrder={handleEditOrder}
      deleteOrder={handleDeleteOrder}
    />
  );
};

export default OrdersLogic;
