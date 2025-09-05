import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../data/dashboard/queryKeys/QueryKeys";
import getOrders from "../../api/orders/getOrders";
import getOneOrder from "../../api/orders/getOneOrder";
import getOrdersResources from "../../api/orders/getOrdersResources";

function useOrderQuery() {
  const [filter, setFilter] = useState({});

  // id of pay that we want to get its data
  const [currentOrderId, setCurrentOrderId] = useState(-1);

  const orderQuery = useQuery({
    queryKey: [QUERY_KEYS.orders.query, filter],
    queryFn: ({ queryKey }) => getOrders({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchOrderFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchOrderFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      orderQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  const getOneOrderQuery = useQuery({
    queryKey: [QUERY_KEYS.orders.oneQuery, currentOrderId],
    queryFn: () => getOneOrder({ currentOrderId }),
    enabled: currentOrderId != -1,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const ordersResources = useQuery({
    queryKey: [QUERY_KEYS.orders.resources],
    queryFn: () => getOrdersResources(),
    retry: false,
    refetchOnWindowFocus: false,
  });
  // console.log(orderQuery.data);
  return {
    orderQuery,
    filter,
    fetchOrderFilter: debouncedFetch,
    setCurrentOrderId,
    currentOrderId,
    getOneOrderQuery,
    ordersResources,
  };
}

export default useOrderQuery;
