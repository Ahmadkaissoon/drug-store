import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/dashboard/layout/DashboardLayout";
import PrivateRoute from "./components/common/PrivateRoute";
import RequireRole from "./components/common/RequireRole";
import RoleLandingRedirect from "./components/common/RoleLandingRedirect";
import Login from "./views/common/login/Login";
import PageLoader from "./components/common/pageLoader/PageLoader";
// import Test from "./test";

import MedicinesLogic from "./views/dashboard/products/medicines/MedicinesLogic";
import OrdersLogic from "./views/dashboard/orders/OrdersLogic";
import AddOrderLogic from "./views/dashboard/orders/addOrders/AddOrderLogic";
import MostImportedLogic from "./views/dashboard/reports/mostImported/MostImportedLogic";
import MostRequestLogic from "./views/dashboard/reports/mostRequest/MostRequestLogic";
import TotalSalesLogic from "./views/dashboard/reports/totalSales/TotalSalesLogic";
import ExpiredMedicinesLogic from "./views/dashboard/reports/expiredMedicines/ExpiredMedicinesLogic";
import AlmostGoneLogic from "./views/dashboard/reports/almostGone/AlmostGoneLogic";
import DelegatesLogic from "./views/dashboard/reports/delegates/DelegatesLogic";
import UsersLogic from "./views/dashboard/basics/users/UsersLogic";
import RegisterLogic from "./views/common/register/RegisterLogic";
// import OrderDetails from "./views/dashboard/orders/orderDetails/OrderDetails";
import OrderDetailsLogic from "./views/dashboard/orders/orderDetails/OrderDetailsLogic";
import EditOrderLogic from "./views/dashboard/orders/editOrder/EditOrderLogic";

const HomeLogic = lazy(() =>
  import("./views/dashboard/home/HomeLogic").catch(() =>
    window.location.reload()
  )
);

const CitiesLogic = lazy(() =>
  import("./views/dashboard/basics/cities/CitiesLogic").catch(() =>
    window.location.reload()
  )
);

const LabsLogic = lazy(() =>
  import("./views/dashboard/basics/labs/LabsLogic").catch(() =>
    window.location.reload()
  )
);

const PharmaciesLogic = lazy(() =>
  import("./views/dashboard/basics/pharmacies/PharmaciesLogic").catch(() =>
    window.location.reload()
  )
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      // </PrivateRoute>
      <DashboardLayout />
    ),
    children: [
      {
        index: true,
        element: (
          //<RoleLandingRedirect />,
          <HomeLogic />
        ),
      },
      {
        path: "home",
        element: (
          // <RequireRole allow={["admin", "manager"]}>
          <Suspense fallback={<PageLoader />}>
            <HomeLogic />
          </Suspense>
          // </RequireRole>
        ),
      },
      {
        path: "basics",
        children: [
          {
            path: "cities",
            element: (
              // <RequireRole allow={["admin", "manager"]}>
              <Suspense fallback={<PageLoader />}>
                <CitiesLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "labs",
            element: (
              // <RequireRole allow={["admin", "manager"]}>
              <Suspense fallback={<PageLoader />}>
                <LabsLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "pharmacies",
            element: (
              // <RequireRole allow={["admin", "manager"]}>
              <Suspense fallback={<PageLoader />}>
                <PharmaciesLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "users",
            element: (
              // <RequireRole allow={["admin"]}>
              <Suspense fallback={<PageLoader />}>
                <UsersLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
        ],
      },
      {
        path: "products",
        children: [
          {
            path: "medicines",
            element: (
              // <RequireRole allow={["admin", "manager"]}>
              <Suspense fallback={<PageLoader />}>
                <MedicinesLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
        ],
      },
      {
        path: "orders",
        children: [
          {
            index: true,
            element: (
              // <RequireRole allow={["manager", "representative" , "accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <OrdersLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "new",
            element: (
              // <RequireRole allow={["manager", "representative" , "accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <AddOrderLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "edit/:id",
            element: (
              // <RequireRole allow={["manager", "representative" , "accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <EditOrderLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "details/:id",
            element: (
              // <RequireRole allow={["manager", "representative" , "accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <OrderDetailsLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
        ],
      },
      {
        path: "reports",
        children: [
          {
            path: "total-import-report",
            element: (
              // <RequireRole allow={["admin", "manager" , "accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <MostImportedLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "most-request-report",
            element: (
              // <RequireRole allow={["admin", "manager" ,"accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <MostRequestLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "total-sales-report",
            element: (
              // <RequireRole allow={["admin", "manager" ,"accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <TotalSalesLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "expired-medicines",
            element: (
              // <RequireRole allow={["admin", "manager" , "accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <ExpiredMedicinesLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "almost-gone-medicines",
            element: (
              // <RequireRole allow={["admin", "manager" , "accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <AlmostGoneLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
          {
            path: "delegates",
            element: (
              // <RequireRole allow={["admin", "manager" ,"accountant"]}>
              <Suspense fallback={<PageLoader />}>
                <DelegatesLogic />
              </Suspense>
              // </RequireRole>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/",
    children: [
      {
        path: "register",
        element: <RegisterLogic />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
