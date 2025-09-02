import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { debounce } from "lodash";
import getTotalDelegates from "../../../api/reports/delegates/getTotalDelegates";

const useDelegatesQuery = () => {
  const [filter, setFilter] = useState({});

  const delegatesQuery = useQuery({
    queryKey: [QUERY_KEYS.delegates.query, filter],
    queryFn: ({ queryKey }) => getTotalDelegates({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchDelegatesFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchDelegatesFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      delegatesQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  return {
    delegatesQuery,
    filter,
    fetchDelegatesFilter: debouncedFetch,
  };
};

export default useDelegatesQuery;
