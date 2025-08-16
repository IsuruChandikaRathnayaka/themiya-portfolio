// src/routes/router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { Home } from "../pages/Home";
import AboutUss from "../pages/AboutUss";


import ContactUs from "../pages/ContactUs";
import Reports from "../pages/Reports";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUss />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
       {
        path: "/reports",
        element: <Reports />,
      },
     
      
    ],
  },
]);

export default router;
