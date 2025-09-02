import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import getTotalExpiredMedicines from "../../../api/reports/expiredMedicines/getTotalExpiredMedicines";

const useExpiredMedicinesQuery = () => {
  const [filter, setFilter] = useState({});

  const expiredMedicinesQuery = useQuery({
    queryKey: [QUERY_KEYS.expiredMedicines.query, filter],
    queryFn: ({ queryKey }) => getTotalExpiredMedicines({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchExpiredMedicinesFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchExpiredMedicinesFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      expiredMedicinesQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  return {
    expiredMedicinesQuery,
    filter,
    fetchExpiredMedicinesFilter: debouncedFetch,
  };
};

export default useExpiredMedicinesQuery;
