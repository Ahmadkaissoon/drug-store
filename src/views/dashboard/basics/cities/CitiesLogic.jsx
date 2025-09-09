import useCitiesMutation from "../../../../hooks/basics/cities/useCitiesMutation";
import useCitiesQuery from "../../../../hooks/basics/cities/useCitiesQuery";
import Cities from "./Cities";

const CitiesLogic = () => {
  const { citiesQuery, filter, fetchCitiesFilter } = useCitiesQuery();
  const { handleAddCity, handleEditCity, handleDeleteCity } =
    useCitiesMutation();
  return (
    <Cities
      data={citiesQuery.data}
      isLoading={citiesQuery.isPending}
      fetchCitiesFilter={fetchCitiesFilter}
      filter={filter}
      addCity={handleAddCity}
      editCity={handleEditCity}
      deleteCity={handleDeleteCity}
    />
  );
};

export default CitiesLogic;
