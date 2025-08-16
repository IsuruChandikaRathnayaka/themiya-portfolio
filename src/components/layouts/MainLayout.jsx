import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";  // <-- named import

export const MainLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
