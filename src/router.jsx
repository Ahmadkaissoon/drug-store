import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/dashboard/layout/DashboardLayout";
import Login from "./views/common/Login";
import PageLoader from "./components/common/pageLoader/PageLoader";
import Test from "./test";
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
const RepresentativeLogic = lazy(() =>
  import("./views/dashboard/basics/representative/RepresentativeLogic").catch(
    () => window.location.reload()
  )
);

const router = createBrowserRouter([
  {
    path: "/",
     //element: <Test />,
    element: <DashboardLayout />,
    // element: <Login />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomeLogic />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomeLogic />
          </Suspense>
        ),
      },
      {
        path: "basics",
        children: [
          {
            path: "cities",
            element: (
              <Suspense fallback={<PageLoader />}>
                <CitiesLogic />
              </Suspense>
            ),
          },
          {
            path: "labs",
            element: (
              <Suspense fallback={<PageLoader />}>
                <LabsLogic />
              </Suspense>
            ),
          },
          {
            path: "pharmacies",
            element: (
              <Suspense fallback={<PageLoader />}>
                <PharmaciesLogic />
              </Suspense>
            ),
          },
          {
            path: "representative",
            element: (
              <Suspense fallback={<PageLoader />}>
                <RepresentativeLogic />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
