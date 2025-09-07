import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";
import "./assets/style/common/index.css";
import SonnerToast from "./components/common/toast/SonnerToast";
import { UserProvider } from "./context/useUser";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <SonnerToast />
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
