/** @format */

import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Visi from "../pages/profile/Visi";
import TentangKami from "../pages/tentangKami/TentangKami";
import "./styel.css";

const MyRoute = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Routes location={location} key={pathname}>
      <Route path="/" element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" index element={<Dashboard />} />
      <Route path="visi" index element={<Visi />} />
      <Route path="tentang-kami" index element={<TentangKami />} />
    </Routes>
  );
};

export default MyRoute;
