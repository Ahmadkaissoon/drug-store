import useCitiesQuery from "../../../../hooks/basics/cities/useCitiesQuery";
import Cities from "./Cities";

const CitiesLogic = () => {
  const { citiesQuery, filter, fetchCitiiesFilter } = useCitiesQuery();
  return (
    <Cities
      data={citiesQuery.data}
      fetchCitiiesFilter={fetchCitiiesFilter}
      filter={filter}
    />
  );
};

export default CitiesLogic;
