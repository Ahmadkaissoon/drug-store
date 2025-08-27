import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import getTotalMostRequest from "../../../api/reports/mostRequest/getTotalMostRequest";

const useMostRequestQuery = () => {
  const [filter, setFilter] = useState({});

  const mostRequestQuery = useQuery({
    queryKey: [QUERY_KEYS.mostRequest.query, filter],
    queryFn: ({ queryKey }) => getTotalMostRequest({ queryKey }),
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
