import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import getCities from "../../../api/basics/cities/getCities";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";

function useCitiesQuery() {
  const [filter, setFilter] = useState({});

  const citiesQuery = useQuery({
    queryKey: [QUERY_KEYS.cities.query, filter],
    queryFn: ({ queryKey }) => getCities({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch cities on change filter values
  async function fetchCitiesFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchCitiesFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      citiesQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);
  // console.log(citiesQuery);

  return {
    citiesQuery,
    filter,
    fetchCitiesFilter: debouncedFetch,
  };
}

export default useCitiesQuery;
