import { createBrowserRouter } from "react-router";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import LoginLogic from "./views/common/LoginLogic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLogic />,
    // element: <DashboardLayout />,
    children: [],
  },
]);

export default router;
