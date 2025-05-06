import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/dashboard/layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [],
  },
]);

export default router;
