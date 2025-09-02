import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import addLabs from "../../../api/basics/labs/addLabs";
import { toast } from "sonner";
import MESSAGES from "../../../data/dashboard/messages/Messages";
import showApiErrors from "../../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../../data/dashboard/messagesDuration/MessagesDuration";
import editLabs from "../../../api/basics/labs/editLabs";
import deleteLabs from "../../../api/basics/labs/deleteLabs";

const useLabsMutation = () => {
  const queryClient = useQueryClient();

  const addLab = useMutation({
    mutationFn: addLabs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.labs.query] });
    },
  });

  async function handleAddLab(data, setOpenAddLab) {
    await toast.promise(
      addLab.mutateAsync({ data }),
      {
        loading: MESSAGES.labs.add.loading,
        success: MESSAGES.labs.add.success,
        error: (error) => {
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenAddLab(false);
  }

  const editLab = useMutation({
    mutationFn: editLabs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.labs.query] });
    },
  });

  async function handleEditLab(data, labId, setOpenEditLab) {
    await toast.promise(
      editLab.mutateAsync({ labId, data }),
      {
        loading: MESSAGES.labs.edit.loading,
        success: MESSAGES.labs.edit.success,
        error: (error) => {
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenEditLab(false);
  }

  const deleteLab = useMutation({
    mutationFn: deleteLabs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.labs.query] });
    },
  });

  async function handleDeleteLab(labId) {
    await toast.promise(
      deleteLab.mutateAsync({ labId }),
      {
        loading: MESSAGES.labs.delete.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.labs.delete.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    addLab,
    handleAddLab,
    editLab,
    handleEditLab,
    deleteLab,
    handleDeleteLab,
  };
};

export default useLabsMutation;
