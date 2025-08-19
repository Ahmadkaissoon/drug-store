import { Navigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import jsonParse from "../../functions/common/jsonParse";

const RoleLandingRedirect = () => {
  const role = jsonParse(secureLocalStorage.getItem("USER_ROLE"))?.data;
  if (!role) return <Navigate to="/login" replace />;
  if (role === "representative") return <Navigate to="/orders" replace />;
  return <Navigate to="/home" replace />;
};

export default RoleLandingRedirect;
