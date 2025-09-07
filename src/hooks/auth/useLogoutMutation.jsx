import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import secureLocalStorage from "react-secure-storage";
import MESSAGES from "../../data/dashboard/messages/Messages";
import showApiErrors from "../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../data/dashboard/messagesDuration/MessagesDuration";
import { useUser } from "../../context/useUser";
import logoutFunction from "../../api/auth/logout";

function useLogoutMutation() {
  // navigate method
  const navigate = useNavigate();

  // user store
  const { setUser } = useUser();

  // logout mutation
  const logout = useMutation({
    mutationFn: logoutFunction,
    onSuccess: async () => {
      secureLocalStorage.removeItem("ACCESS_TOKEN");
      secureLocalStorage.removeItem("REFRESH_TOKEN");
      secureLocalStorage.removeItem("USER");

      setUser(undefined);
      navigate("/login");
    },
    onError: async () => {
      secureLocalStorage.removeItem("ACCESS_TOKEN");
      secureLocalStorage.removeItem("REFRESH_TOKEN");
      secureLocalStorage.removeItem("USER");

      setUser(undefined);
      navigate("/login");
    },
  });

  // handle submit logout form
  // gets: submitted data
  async function handleLogout() {
    toast.promise(
      logout.mutateAsync(),
      {
        loading: MESSAGES?.logout?.loading,
        // change the toast status and message when successfully response
        success: MESSAGES?.logout?.success,
        error: () => {
          MESSAGES?.logout?.success;
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    logout,
    handleLogout,
  };
}

export default useLogoutMutation;
