import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Import Navbar

export default function MainLayout() {
  const location = useLocation(); // Get current route

  return (
    <>
      {/* ✅ Show Navbar only if NOT on the auth page */}
      {location.pathname !== "/auth" && <Navbar />}  

      {/* Render child routes */}
      <Outlet />
    </>
  );
}
