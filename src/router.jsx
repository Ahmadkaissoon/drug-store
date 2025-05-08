import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/dashboard/layout/DashboardLayout";
import Login from "./views/common/Login";
import Test from "./test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
    // element: <DashboardLayout />,
    // element: <Login />,
    children: [],
  },
]);

export default router;
