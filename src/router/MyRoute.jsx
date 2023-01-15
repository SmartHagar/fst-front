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

import { AnimatePresence } from "framer-motion";
import Pengumuman from "../pages/pengumuman/Pengumuman";
import ListPengumuman from "../pages/pengumuman/ListPengumuman";
import Dokumen from "../pages/download/dokumen/Dokumen";
import Jadwal from "../pages/download/jadwal/Jadwal";

const MyRoute = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" index element={<Dashboard />} />
        {/* profil */}
        <Route path="profile">
          <Route path="visi-misi" index element={<VisiMisi />} />
          <Route path="sejarah" index element={<Sejarah />} />
        </Route>
        {/* prodi */}
        <Route path="prodi">
          <Route path="sistem-informasi" element={<SistemInformasi />} />
          <Route path="biologi" element={<Biologi />} />
          <Route path="geologi" element={<Geologi />} />
        </Route>
        <Route path="galeri" element={<Galeri />} />
        {/* berita */}
        <Route path="berita" element={<Berita />}>
          <Route path="list" element={<ListBerita />} />
          <Route path="detail" element={<BeritaDetail />} />
        </Route>
        <Route path="pengumuman" element={<Pengumuman />}>
          <Route path=":id" element={<ListPengumuman />} />
        </Route>
        <Route path="download">
          <Route path="jadwal" element={<Jadwal />} />
          <Route path="dokumen" element={<Dokumen />} />
        </Route>
        <Route path="tentang-kami" index element={<TentangKami />} />
        <Route path="*" index element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoute;
