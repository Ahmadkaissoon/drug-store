import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { toast } from "sonner";
import MESSAGES from "../../../data/dashboard/messages/Messages";
import showApiErrors from "../../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../../data/dashboard/messagesDuration/MessagesDuration";
import addMedicines from "../../../api/products/medicines/addMedicine";
import editMedicinec from "../../../api/products/medicines/editMedicine";
import deleteMedicines from "../../../api/products/medicines/deleteMedicine";
import importMedicinesFile from "../../../api/products/medicines/importMedicinesFile";

const useMedicinesMutation = () => {
  // query client that will used for mutation previous queries
  const queryClient = useQueryClient();

  const addMedicine = useMutation({
    mutationFn: addMedicines,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.products.query] });
    },
  });

  async function handleAddMedicine(data, setOpenAddMedicine) {
    await toast.promise(
      addMedicine.mutateAsync({ data }),
      {
        loading: MESSAGES.medidicnes.add.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.medidicnes.add.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenAddMedicine(false);
  }

  const editMedicine = useMutation({
    mutationFn: editMedicinec,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.products.query] });
    },
  });

  async function handleEditMedicine(data, medicineId, setOpenEditMedicine) {
    await toast.promise(
      editMedicine.mutateAsync({ medicineId, data }),
      {
        loading: MESSAGES.medidicnes.edit.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.medidicnes.edit.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenEditMedicine(false);
  }

  const deleteMedicine = useMutation({
    mutationFn: deleteMedicines,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.products.query] });
    },
  });

  async function handleDeleteMedicine(medicineId) {
    await toast.promise(
      deleteMedicine.mutateAsync({ medicineId }),
      {
        loading: MESSAGES.medidicnes.delete.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.medidicnes.delete.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  const importMedicine = useMutation({
    mutationFn: importMedicinesFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.products.query] });
    },
  });

  async function handleImportMedicine(data, setOpenImportMedicine) {
    await toast.promise(
      importMedicine.mutateAsync({ data }),
      {
        loading: MESSAGES.medidicnes.import.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.medidicnes.import.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );

    setOpenImportMedicine(false);
  }

  return {
    addMedicine,
    handleAddMedicine,
    editMedicine,
    handleEditMedicine,
    deleteMedicine,
    handleDeleteMedicine,
    importMedicine,
    handleImportMedicine,
  };
};

export default useMedicinesMutation;
