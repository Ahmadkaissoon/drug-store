import { useEffect, useRef, useState } from "react";
import QUERY_KEYS from "../../../data/dashboard/queryKeys/QueryKeys";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import getUsers from "../../../api/basics/users/getUsers";
import getOneUser from "../../../api/basics/users/getOneUser";
import getUsersResources from "../../../api/basics/users/getUsersResources";

const useUsersQuery = () => {
  const [filter, setFilter] = useState({});

  // id of pay that we want to get its data
  const [currentUserId, setCurrentUserId] = useState(-1);

  const usersQuery = useQuery({
    queryKey: [QUERY_KEYS.users.query, filter],
    queryFn: ({ queryKey }) => getUsers({ queryKey }),
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  // debounce fetch pays on change filter values
  async function fetchUsersFilter(filter) {
    setFilter(filter);
  }
  const debouncedFetch = debounce(fetchUsersFilter, 300);
  // Refetch the query whenever the filter state changes
  const prevFilter = useRef(filter);
  useEffect(() => {
    if (JSON.stringify(prevFilter.current) === JSON.stringify(filter)) {
      usersQuery.refetch();
    }
    prevFilter.current = filter;
  }, [filter]);

  const getOneUserQuery = useQuery({
    queryKey: [QUERY_KEYS.users.oneQuery, currentUserId],
    queryFn: () => getOneUser({ currentUserId }),
    enabled: currentUserId != -1,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const usersResources = useQuery({
    queryKey: [QUERY_KEYS.users.resources],
    queryFn: () => getUsersResources(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    usersQuery,
    filter,
    fetchUsersFilter: debouncedFetch,
    currentUserId,
    setCurrentUserId,
    getOneUserQuery,
    usersResources,
  };
};

export default useUsersQuery;
