import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { keepPreviousData } from "@tanstack/react-query";
import { debounce } from "lodash";

const useMostRequestQuery = () => {
  const [filter, setFilter] = useState({});

  const mostRequestQuery = useQuery({
    queryKey: [QUERY_KEYS.mostRequest.query, filter],
    queryFn: ({ queryKey }) => getCities({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchMostRequestFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchMostRequestFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      mostRequestQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  return {
    mostRequestQuery,
    filter,
    fetchMostRequestFilter: debouncedFetch,
  };
};

export default useMostRequestQuery;
