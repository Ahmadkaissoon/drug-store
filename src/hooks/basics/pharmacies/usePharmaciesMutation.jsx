import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import MESSAGES from "../../../data/dashboard/messages/Messages";
import showApiErrors from "../../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../../data/dashboard/messagesDuration/MessagesDuration";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import addPharmacies from "../../../api/basics/pharmacies/addPharmacies";
import editPharmacies from "../../../api/basics/pharmacies/editPharmacies";
import deletePharmacies from "../../../api/basics/pharmacies/deletePharmacies";

const usePharmaciesMutation = () => {
  // query client that will used for mutation previous queries
  const queryClient = useQueryClient();

  const addPharmacy = useMutation({
    mutationFn: addPharmacies,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.pharmacies.query],
      });
    },
  });

  async function handleAddPharmacy(data, setOpenAddPharmacy) {
    await toast.promise(
      addPharmacy.mutateAsync({ data }),
      {
        loading: MESSAGES.pharmacies.add.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.pharmacies.add.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenAddPharmacy(false);
  }

  const editPharmacy = useMutation({
    mutationFn: editPharmacies,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.pharmacies.query],
      });
    },
  });

  async function handleEditPharmacy(data, pharmacyId, setOpenEditPharmacy) {
    await toast.promise(
      editPharmacy.mutateAsync({ pharmacyId, data }),
      {
        loading: MESSAGES.pharmacies.edit.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.pharmacies.edit.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenEditPharmacy(false);
  }

  const deletePharmacy = useMutation({
    mutationFn: deletePharmacies,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.pharmacies.query],
      });
    },
  });

  async function handleDeletePharmacy(pharmacyId) {
    await toast.promise(
      deletePharmacy.mutateAsync({ pharmacyId }),
      {
        loading: MESSAGES.pharmacies.delete.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.pharmacies.delete.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    addPharmacy,
    handleAddPharmacy,
    editPharmacy,
    handleEditPharmacy,
    deletePharmacy,
    handleDeletePharmacy,
  };
};

export default usePharmaciesMutation;
