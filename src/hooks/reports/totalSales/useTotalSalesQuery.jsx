import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import getTotalSales from "../../../api/reports/totalSales/getTotalSales";

const useTotalSalesQuery = () => {
  const [filter, setFilter] = useState({});

  const totalSalesQuery = useQuery({
    queryKey: [QUERY_KEYS.totalSales.query, filter],
    queryFn: ({ queryKey }) => getTotalSales({ queryKey }),
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
