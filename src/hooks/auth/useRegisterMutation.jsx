import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import secureLocalStorage from "react-secure-storage";
import registerFunction from "../../api/auth/register";
import { useState } from "react";
// import { jwtDecode } from "jwt-decode";
import MESSAGES from "../../data/dashboard/messages/Messages";
import showApiErrors from "../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../data/dashboard/messagesDuration/MessagesDuration";
import { useUser } from "../../context/useUser";

function useRegisterMutation() {
  // navigate method
  const navigate = useNavigate();

  // user store
  const { setUser } = useUser();

  // register mutation
  const register = useMutation({
    mutationFn: registerFunction,
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

  // handle submit register form
  // gets: submitted data
  async function handleRegister(data) {
    toast.promise(
      register.mutateAsync({ data }),
      {
        loading: MESSAGES?.register?.loading,
        // change the toast status and message when successfully response
        success: MESSAGES?.register?.success,
        error: (error) => {
          //toast the api returned errors
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
  }

  return {
    register,
    handleRegister,
  };
}

export default useRegisterMutation;
