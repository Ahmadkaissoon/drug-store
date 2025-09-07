import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import secureLocalStorage from "react-secure-storage";
import loginFunction from "../../api/auth/login";
import { useState } from "react";
// import { jwtDecode } from "jwt-decode";
import MESSAGES from "../../data/dashboard/messages/Messages";
import showApiErrors from "../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../data/dashboard/messagesDuration/MessagesDuration";
import { useUser } from "../../context/useUser";

function useLoginMutation() {
  // navigate method
  const navigate = useNavigate();

  // user store
  const { setUser } = useUser();

  // login mutation
  const login = useMutation({
    mutationFn: loginFunction,
    onSuccess: async ({ user }) => {
      const data = user;
      // const data = jwtDecode(user.access_token);
      secureLocalStorage.setItem("ACCESS_TOKEN", { data: user?.access });
      secureLocalStorage.setItem("REFRESH_TOKEN", { data: user?.refresh });
      secureLocalStorage.setItem("USER", { data: data });

      setUser(data);
      navigate("/");
    },
  });

  // handle submit login form
  // gets: submitted data
  async function handleLogin(data) {
    toast.promise(
      login.mutateAsync({ data }),
      {
        loading: MESSAGES?.login?.loading,
        // change the toast status and message when successfully response
        success: MESSAGES?.login?.success,
        error: (error) => {
          //toast the api returned errors
          console.log({ error });
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    login,
    handleLogin,
  };
}

export default useLoginMutation;
