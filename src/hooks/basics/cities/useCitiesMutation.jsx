import { useMutation, useQueryClient } from "@tanstack/react-query";
import addCities from "../../../api/basics/cities/addCities";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { toast } from "sonner";
import MESSAGES from "../../../data/dashboard/messages/Messages";
import showApiErrors from "../../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../../data/dashboard/messagesDuration/MessagesDuration";
import deleteCities from "../../../api/basics/cities/deleteCities";
import editCities from "../../../api/basics/cities/editCities";

function useCitiesMutation() {
  // query client that will used for mutation previous queries
  const queryClient = useQueryClient();

  const addCity = useMutation({
    mutationFn: addCities,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cities.query] });
    },
  });

  async function handleAddCity(data, setOpenAddCity) {
    await toast.promise(
      addCity.mutateAsync({ data }),
      {
        loading: MESSAGES.cities.add.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.cities.add.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenAddCity(false);
  }

  const editCity = useMutation({
    mutationFn: editCities,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cities.query] });
    },
  });

  async function handleEditCity(data, cityId, setOpenEditCity) {
    await toast.promise(
      editCity.mutateAsync({ cityId, data }),
      {
        loading: MESSAGES.cities.edit.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.cities.edit.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setOpenEditCity(false);
  }

  const deleteCity = useMutation({
    mutationFn: deleteCities,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cities.query] });
    },
  });

  async function handleDeleteCity(cityId) {
    await toast.promise(
      deleteCity.mutateAsync({ cityId }),
      {
        loading: MESSAGES.cities.delete.loading,
        // change the toast status and message when successfully response
        success: MESSAGES.cities.delete.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    addCity,
    handleAddCity,
    editCity,
    handleEditCity,
    deleteCity,
    handleDeleteCity,
  };
}

export default useCitiesMutation;
