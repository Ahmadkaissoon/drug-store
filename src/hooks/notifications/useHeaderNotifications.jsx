import { keepPreviousData, useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "../../data/dashboard/queryKeys/QueryKeys";
import getHeaderNotifications from "../../api/notifications/getHeaderNotifications";

const useHeaderNotifications = () => {
  const notifications = useQuery({
    queryKey: [QUERY_KEYS.notifications.query],
    queryFn: getHeaderNotifications,
    placeholderData: keepPreviousData,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { notifications };
};

export default useHeaderNotifications;
