import { useMutation, useQueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { toast } from "sonner";
import MESSAGES from "../../../data/dashboard/messages/Messages";
import showApiErrors from "../../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../../data/dashboard/messagesDuration/MessagesDuration";
import addUsers from "../../../api/basics/users/addUser";
import editUsers from "../../../api/basics/users/editUser";
import deleteUsers from "../../../api/basics/users/deleteUser";

const useUsersMutation = () => {
  // query client that will used for mutation previous queries
  const queryClient = useQueryClient();

  const addUser = useMutation({
    mutationFn: addUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.users.query] });
    },
  });

  async function handleAddUser(data, setOpenAddUser) {
    await toast.promise(
      addUser.mutateAsync({ data }),
      {
        loading: MESSAGES.user.add.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.user.add.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenAddUser(false);
  }

  const editUser = useMutation({
    mutationFn: editUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.users.query] });
    },
  });

  async function handleEditUser(data, userId, setOpenEditUser) {
    await toast.promise(
      editUser.mutateAsync({ userId, data }),
      {
        loading: MESSAGES.user.edit.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.user.edit.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenEditUser(false);
  }

  const deleteUser = useMutation({
    mutationFn: deleteUsers,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.users.query] });
    },
  });

  async function handleDeleteUser(userId) {
    await toast.promise(
      deleteUser.mutateAsync({ userId }),
      {
        loading: MESSAGES.user.delete.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.user.delete.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    addUser,
    handleAddUser,
    editUser,
    handleEditUser,
    deleteUser,
    handleDeleteUser,
  };
};

export default useUsersMutation;
