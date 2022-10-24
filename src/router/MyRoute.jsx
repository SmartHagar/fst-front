/** @format */

import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Biologi from "../pages/prodi/Biologi";
import Geologi from "../pages/prodi/Geologi";
import SistemInformasi from "../pages/prodi/SistemInformasi";
import Sejarah from "../pages/profile/Sejarah";
import VisiMisi from "../pages/profile/VisiMisi";
import TentangKami from "../pages/about/TentangKami";
import "./styel.css";
import Galeri from "../pages/galeri/Galeri";
import Berita from "../pages/berita/Berita";
import NotFound from "../pages/error/NotFound";

const MyRoute = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Routes location={location} key={pathname}>
      <Route path="/" element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" index element={<Dashboard />} />
      {/* profil */}
      <Route path="visi-misi" index element={<VisiMisi />} />
      <Route path="sejarah" index element={<Sejarah />} />
      {/* prodi */}
      <Route path="sistem-informasi" index element={<SistemInformasi />} />
      <Route path="biologi" index element={<Biologi />} />
      <Route path="geologi" index element={<Geologi />} />
      <Route path="Galeri" index element={<Galeri />} />
      <Route path="Berita" index element={<Berita />} />
      <Route path="tentang-kami" index element={<TentangKami />} />
      <Route path="*" index element={<NotFound />} />
    </Routes>
  );
};

export default MyRoute;
