import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import getCatalogs from "../../../api/products/catalog/getCatalogs";
import getCatalogsResources from "../../../api/products/catalog/getCatalogsResources";

const useCatalogQuery = () => {
  const catalogsQuery = useQuery({
    queryKey: [QUERY_KEYS.catalog.query],
    queryFn: getCatalogs,
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const catalogsResources = useQuery({
    queryKey: [QUERY_KEYS.catalog.resources],
    queryFn: getCatalogsResources,
    retry: false,
    refetchOnWindowFocus: false,
  });
  return {
    catalogsQuery,
    catalogsResources,
  };
};

export default useCatalogQuery;
