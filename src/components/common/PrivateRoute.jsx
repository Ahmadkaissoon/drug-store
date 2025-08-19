import { Navigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import jsonParse from "../../functions/common/jsonParse";

const PrivateRoute = ({ children }) => {
  const token = jsonParse(secureLocalStorage.getItem("ACCESS_TOKEN"))?.data;
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
