import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "../src/assets/style/common/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./router";

// build query client that every useQuery and useMutation use it
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
