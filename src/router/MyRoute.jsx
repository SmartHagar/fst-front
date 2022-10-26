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
import ListBerita from "../pages/berita/ListBerita";
import BeritaDetail from "../pages/berita/BeritaDetail";
import Prodi from "../pages/prodi/Prodi";

import { AnimatePresence } from "framer-motion";
import Pengumuman from "../pages/pengumuman/Pengumuman";
import ListPengumuman from "../pages/pengumuman/ListPengumuman";
import Profile from "../pages/profile/Profile";

const MyRoute = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" index element={<Dashboard />} />
        {/* profil */}
        <Route path="profile" element={<Profile />}>
          <Route path="visi-misi" index element={<VisiMisi />} />
          <Route path="sejarah" index element={<Sejarah />} />
        </Route>
        {/* prodi */}
        <Route path="prodi" element={<Prodi />}>
          <Route path="sistem-informasi" element={<SistemInformasi />} />
          <Route path="biologi" element={<Biologi />} />
          <Route path="geologi" element={<Geologi />} />
        </Route>
        <Route path="galeri" element={<Galeri />} />
        <Route path="berita" element={<Berita />}>
          <Route path="list" element={<ListBerita />} />
          <Route path="detail" element={<BeritaDetail />} />
        </Route>
        <Route path="pengumuman" element={<Pengumuman />}>
          <Route path=":id" element={<ListPengumuman />} />
        </Route>
        <Route path="tentang-kami" index element={<TentangKami />} />
        <Route path="*" index element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoute;
