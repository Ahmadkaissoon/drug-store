import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { debounce } from "lodash";
import getPharmacy from "../../../api/basics/pharmacies/getPharmacies";
import getOnePharmacy from "../../../api/basics/pharmacies/getOnePharmacies";
import getPharmaciesResources from "../../../api/basics/pharmacies/getPharmaciesResources";

const usePharmaciesQuery = () => {
  const [filter, setFilter] = useState({});

  // id of pay that we want to get its data
  const [currentPharmacyId, setCurrentPharmacyId] = useState(-1);

  const pharmaciesQuery = useQuery({
    queryKey: [QUERY_KEYS.pharmacies.query, filter],
    queryFn: ({ queryKey }) => getPharmacy({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchPharmaciesFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchPharmaciesFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      pharmaciesQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  const getOnePharmacyQuery = useQuery({
    queryKey: [QUERY_KEYS.pharmacies.oneQuery, currentPharmacyId],
    queryFn: () => getOnePharmacy({ currentPharmacyId }),
    enabled: currentPharmacyId != -1,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const pharmaciesResources = useQuery({
    queryKey: [QUERY_KEYS.pharmacies.resources],
    queryFn: getPharmaciesResources,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    pharmaciesQuery,
    filter,
    fetchPharmaciesFilter: debouncedFetch,
    currentPharmacyId,
    setCurrentPharmacyId,
    getOnePharmacyQuery,
    pharmaciesResources,
  };
};

export default usePharmaciesQuery;
