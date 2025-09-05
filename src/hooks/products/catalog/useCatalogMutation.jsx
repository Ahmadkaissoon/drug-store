import { useMutation, useQueryClient } from "@tanstack/react-query";
import addCatalogs from "../../../api/products/catalog/addCatalogs";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { toast } from "sonner";
import MESSAGES from "../../../data/dashboard/messages/Messages";
import showApiErrors from "../../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../../data/dashboard/messagesDuration/MessagesDuration";
import editCatalogs from "../../../api/products/catalog/editCatalogs";
import deleteCatalogs from "../../../api/products/catalog/deleteCatalogs";

const useCatalogMutation = () => {
  // query client that will used for mutation previous queries
  const queryClient = useQueryClient();

  const addCatalog = useMutation({
    mutationFn: addCatalogs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.catalog.query] });
    },
  });

  async function handleAddCatalog(data, setOpenCatalog) {
    await toast.promise(
      addCatalog.mutateAsync({ data }),
      {
        loading: MESSAGES.catalogs.add.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.catalogs.add.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenCatalog(false);
  }

  const editCatalog = useMutation({
    mutationFn: editCatalogs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.catalog.query] });
    },
  });

  async function handleEditCatalog(data, catalogId, setOpenEditCatalog) {
    await toast.promise(
      editCatalog.mutateAsync({ catalogId, data }),
      {
        loading: MESSAGES.catalogs.edit.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.catalogs.edit.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenEditCatalog(false);
  }

  const deleteCatalog = useMutation({
    mutationFn: deleteCatalogs,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.catalog.query] });
    },
  });

  async function handleDeleteCatalog(catalogId) {
    await toast.promise(
      deleteCatalog.mutateAsync({ catalogId }),
      {
        loading: MESSAGES.catalogs.delete.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.catalogs.delete.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    handleAddCatalog,
    handleEditCatalog,
    handleDeleteCatalog,
  };
};

export default useCatalogMutation;
