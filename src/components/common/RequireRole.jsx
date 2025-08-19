import { Navigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import jsonParse from "../../functions/common/jsonParse";

const RequireRole = ({ allow, children }) => {
  const role = jsonParse(secureLocalStorage.getItem("USER_ROLE"))?.data;
  if (!role) {
    return <Navigate to="/login" replace />;
  }
  const allowed = Array.isArray(allow) ? allow : [allow];
  if (!allowed.includes(role)) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RequireRole;
