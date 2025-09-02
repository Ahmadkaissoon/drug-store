import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../data/dashboard/queryKeys/QueryKeys";
import { toast } from "sonner";
import MESSAGES from "../../data/dashboard/messages/Messages";
import showApiErrors from "../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../data/dashboard/messagesDuration/MessagesDuration";
import addOrder from "../../api/orders/addOrder";
import editOrder from "../../api/orders/editOrder";
import deleteOrder from "../../api/orders/deleteOrder";

const useOrderMutation = () => {
  // query client that will used for mutation previous queries
  const queryClient = useQueryClient();

  const addOrderMutation = useMutation({
    mutationFn: addOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.orders.query] });
    },
  });

  async function handleAddOrder(data, setOpenAddOrder) {
    await toast.promise(
      addOrderMutation.mutateAsync({ data }),
      {
        loading: MESSAGES.orders.add.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.orders.add.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenAddOrder(false);
  }

  const editOrderMutation = useMutation({
    mutationFn: editOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.orders.query] });
    },
  });

  async function handleEditOrder(data, orderId, setOpenEditOrder) {
    await toast.promise(
      editOrderMutation.mutateAsync({ orderId, data }),
      {
        loading: MESSAGES.orders.edit.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.orders.edit.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenEditOrder(false);
  }

  const deleteOrderMutation = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.orders.query] });
    },
  });

  async function handleDeleteOrder(orderId) {
    await toast.promise(
      deleteOrderMutation.mutateAsync({ orderId }),
      {
        loading: MESSAGES.orders.delete.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.orders.delete.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    addOrder: addOrderMutation,
    handleAddOrder,
    editOrder: editOrderMutation,
    handleEditOrder,
    deleteOrder: deleteOrderMutation,
    handleDeleteOrder,
  };
};

export default useOrderMutation;
