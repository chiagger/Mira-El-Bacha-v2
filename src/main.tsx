import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MobileProvider } from "./contexts/MobileContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CV from "./components/CV.tsx";
import Contacts from "./components/Contacts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/CV",
    element: <CV />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MobileProvider>
      <RouterProvider router={router} />
    </MobileProvider>
  </React.StrictMode>
);
