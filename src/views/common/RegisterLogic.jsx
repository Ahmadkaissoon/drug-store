import { useLocation, useNavigate } from "react-router";
import Register from "./Register";
import { useState } from "react";
import toast from "react-hot-toast";
import RegisterFunction from "../../api/register/Register";
import MESSAGES from "../../data/dashboard/messages/Messages";
import showApiErrors from "../../functions/common/showApiErrors";
import MESSAGES_DURATION from "../../data/dashboard/messagesDuration/MessagesDuration";

const RegisterLogic = () => {
  const navigate = useNavigate();
  const [isLogging, setIsLogging] = useState(false);
  const location = useLocation();
  async function submitData(data) {
    setIsLogging(true);
    console.log({ data });
    await toast.promise(
      RegisterFunction(navigate, data, location?.state?.previousPage),
      {
        loading: MESSAGES?.register?.loading,
        success: MESSAGES?.register?.success,
        error: (error) => {
          setIsLogging(false);
          return showApiErrors(error);
        },
      },
      MESSAGES_DURATION
    );
    setIsLogging(false);
  }
  return <Register submitData={submitData} isLogging={isLogging} />;
};

export default RegisterLogic;
