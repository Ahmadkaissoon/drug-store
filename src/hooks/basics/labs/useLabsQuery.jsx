import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { debounce } from "lodash";
import getLabs from "../../../api/basics/labs/getLabs";

const useLabsQuery = () => {
  const [filter, setFilter] = useState({});

  const labsQuery = useQuery({
    queryKey: [QUERY_KEYS.labs.query, filter],
    queryFn: ({ queryKey }) => getLabs({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchLabsFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchLabsFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      labsQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  console.log(labsQuery);
  return {
    labsQuery,
    filter,
    fetchLabsFilter: debouncedFetch,
  };
};

export default useLabsQuery;
