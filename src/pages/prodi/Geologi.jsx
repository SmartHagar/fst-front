/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useDosen from "../../stores/dosen";
import Dosen from "../../components/dosen/Dosen";

const Geologi = () => {
  const { setDosenProdi, dataDosenProdi } = useDosen();

  useEffect(() => {
    setDosenProdi(2);
  }, [setDosenProdi]);
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="flex flex-wrap justify-between mx-2 md:mx-10"
    >
      <div className="w-full font-arvo text-sm lg:w-3/4 min-h-[83vh]">
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
      </div>
      {/* Side */}
      <div className="w-full lg:w-[24%] bg-white/[0.3] rounded-lg lg:mt-14 mt-12">
        <div className="bg-blue-600 h-10 w-11/12 mx-auto rounded-lg -mt-5 mb-4 shadow-lg flex justify-center items-center">
          <h1 className="font-arvo text-white font-bold">Dosen TG</h1>
        </div>
        <Dosen dataDosenProdi={dataDosenProdi} />
      </div>
    </motion.div>
  );
};

export default Geologi;
