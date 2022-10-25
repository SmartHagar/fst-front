/** @format */

import React from "react";
import { motion } from "framer-motion";

const Geologi = () => {
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="w-full font-arvo text-sm lg:w-3/4"
      >
        <h2 className="mb-5 mt-2 font-bold text-lg sm:text-2xl">
          Visi Misi Program Studi Teknik Geologi
        </h2>
        <h2 className="text-center mb-3 mt-2 font-bold text-xl">Visi</h2>
        <p className="text-justify leading-6">
          Menghasilkan Sumber Daya Manusia yang kompetitif Di Tanah Papua dalam
          Bidang Geologi Pertambangan Mineral, Geologi Energi Migas dan Geologi
          Lingkungan yang berkepribadian Pancasilais dan Takut akan Tuhan.
        </p>
        <h2 className="text-center mb-3 mt-8 font-bold text-xl">Misi</h2>
        <div className="text-justify leading-6">
          <ol className="list-decimal">
            <li className="mb-2">
              Menyelenggarakan Pendidikan dan Pengajaran yang bermutu, kondusif
              untuk menghasilkan Sarjana Teknik Geologi yang berkualitas,
              profesional, pada tahun 2022 dan takut akan Tuhan.
            </li>
            <li className="mb-2">
              Mengambangkan dan menyelenggarakan penelitian dibidang Geologi
              Pertambangan Mineral, Geologi Migas dan Geologi Lingkungan yang
              berbasis kebumian.
            </li>
            <li className="mb-2">
              Melaksanakan kegiatan Penelitian dan Pengabdian pada Masyarakat
              sebagai salah satu proses pemantapan dan pemanfaatan ilmu untuk
              masyarakat khususnya yang berkaitan dengan bidang-bidang geologi.
            </li>
          </ol>
        </div>
      </motion.div>
      <div></div>
    </div>
  );
};

export default Geologi;
