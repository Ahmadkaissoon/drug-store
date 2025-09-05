import { useMutation, useQueryClient } from "@tanstack/react-query";
import addProductMedicine from "../../../api/products/product/addProductMedicine";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { toast } from "sonner";
import MESSAGES from "../../../data/dashboard/messages/Messages";
import showApiErrors from "../../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../../data/dashboard/messagesDuration/MessagesDuration";

const useProductMedicineMutation = () => {
  // query client that will used for mutation previous queries
  const queryClient = useQueryClient();

  const addProductMedicines = useMutation({
    mutationFn: addProductMedicine,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.productMedicine.query],
      });
    },
  });

  async function handleAddProductMedicines(data, setOpenAddProduct) {
    await toast.promise(
      addProductMedicines.mutateAsync({ data }),
      {
        loading: MESSAGES.productMedicine.add.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.productMedicine.add.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenAddProduct(false);
  }

  return {
    handleAddProductMedicines,
    addProductMedicines,
  };
};

export default useProductMedicineMutation;
