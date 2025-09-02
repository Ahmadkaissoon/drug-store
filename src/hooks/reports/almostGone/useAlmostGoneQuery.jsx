import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { debounce } from "lodash";
import getTotalAlmostGone from "../../../api/reports/almostGone/getTotalAlmostGone";

const useAlmostGoneQuery = () => {
  const [filter, setFilter] = useState({});

  const almostGoneQuery = useQuery({
    queryKey: [QUERY_KEYS.almostGone.query, filter],
    queryFn: ({ queryKey }) => getTotalAlmostGone({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchAlmostGoneFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchAlmostGoneFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      almostGoneQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  return {
    almostGoneQuery,
    filter,
    fetchAlmostGoneFilter: debouncedFetch,
  };
};

export default useAlmostGoneQuery;
