import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import getTotalMostImported from "../../../api/reports/mostImported/getTotalMostImported";
import getMostImportedResources from "../../../api/reports/mostImported/getMostImportedResources";

const useMostImportedQuery = () => {
  const [filter, setFilter] = useState({});

  const mostImportedQuery = useQuery({
    queryKey: [QUERY_KEYS.mostImported.query, filter],
    queryFn: ({ queryKey }) => getTotalMostImported({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchMostImportedFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchMostImportedFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      mostImportedQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  const mostImportedResources = useQuery({
    queryKey: [QUERY_KEYS.mostImported.resources],
    queryFn: () => getMostImportedResources(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    mostImportedQuery,
    filter,
    fetchMostImportedFilter: debouncedFetch,
    mostImportedResources,
  };
};

export default useMostImportedQuery;
