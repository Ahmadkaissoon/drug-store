import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { debounce } from "lodash";
import getMedicine from "../../../api/products/medicines/getMedicine";
import getMedicinesResoucres from "../../../api/products/medicines/getMedicinesResources";
import getMedicinesLabsResources from "../../../api/products/medicines/getMedicinesLabResources";

const useMedicinesQuery = () => {
  const [filter, setFilter] = useState({});

  // id of pay that we want to get its data
  const [currentMedicinesId, setCurrentMedicinesId] = useState(-1);

  const medicinesQuery = useQuery({
    queryKey: [QUERY_KEYS.stocks.query, filter],
    queryFn: ({ queryKey }) => getMedicine({ queryKey }),
    placeholderData: keepPreviousData,
    initialData: [],
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchMedicinesFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchMedicinesFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      medicinesQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  // const getOnePharmacyQuery = useQuery({
  //   queryKey: [QUERY_KEYS.products.oneQuery, currentMedicinesId],
  //   queryFn: () => getOneMedicine({ currentMedicinesId }),
  //   enabled: currentMedicinesId != -1,
  //   retry: false,
  //   refetchOnWindowFocus: false,
  // });

  const medicinesResources = useQuery({
    queryKey: [QUERY_KEYS.stocks.resources],
    queryFn: getMedicinesResoucres,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const medicinesLabsResources = useQuery({
    queryKey: [QUERY_KEYS.stocks.labs],
    queryFn: getMedicinesLabsResources,
    retry: false,
    refetchOnWindowFocus: false,
  });
  console.log(medicinesQuery.data);

  return {
    medicinesQuery,
    filter,
    fetchMedicinesFilter: debouncedFetch,
    setCurrentMedicinesId,
    currentMedicinesId,
    // getOnePharmacyQuery,
    medicinesResources,
    medicinesLabsResources,
  };
};

export default useMedicinesQuery;
