import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";
import "./assets/style/common/index.css";
import SonnerToast from "./components/common/toast/SonnerToast";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SonnerToast />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
