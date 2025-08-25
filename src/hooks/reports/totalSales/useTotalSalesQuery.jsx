import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { keepPreviousData } from "@tanstack/react-query";
import { debounce } from "lodash";

const useTotalSalesQuery = () => {
  const [filter, setFilter] = useState({});

  const totalSalesQuery = useQuery({
    queryKey: [QUERY_KEYS.totalSales.query, filter],
    queryFn: ({ queryKey }) => getCities({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchTotalSalesFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchTotalSalesFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      totalSalesQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  return {
    totalSalesQuery,
    filter,
    fetchTotalSalesFilter: debouncedFetch,
  };
};

export default useTotalSalesQuery;
