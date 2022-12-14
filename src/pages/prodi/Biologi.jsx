/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Dosen from "../../components/dosen/Dosen";
import useDosen from "../../stores/dosen";

const Biologi = () => {
  const { setDosenProdi, dataDosenProdi } = useDosen();

  useEffect(() => {
    setDosenProdi(3);
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
          Visi Misi Program Studi Biologi
        </h2>
        <h2 className="text-center mb-3 mt-2 font-bold text-xl">Visi</h2>
        <p className="text-justify leading-6">
          Visi Program Studi Biologi disusun dengan mengacu kepada Visi Fakultas
          Sains & Teknologi dan Visi Universitas Ottow Geissler Papua, adalah :
          “Menghasilkan Sunber Daya Manusia yang berintelektual dan kompetitif
          di Tanah Papua pada Tahun 2020 dibidang Keanekaragaman Hayati dan
          Konservasi serta memiliki kepribadian yang Pancasilais dan takut akan
          Tuhan.
        </p>
        <h2 className="text-center mb-3 mt-8 font-bold text-xl">Misi</h2>
        <div className="text-justify leading-6">
          <p className="mb-2">
            Untuk mewujudkan visi tersebut diatas selanjutnya dirumuskan Misi
            Program Studi Biologi Fakultas Sains & Teknologi Universitas Ottow
            Geissler Papua sebagai berikut:
          </p>
          <ol className="list-decimal">
            <li className="mb-2">
              Menyelenggarakan pendidikan dan pengajaran yang bermutu
              sertamenciptakan suasana lingkungan kampus yang kondusif untuk
              menghasilkan sarjana ilmu biologi yang berintelektual dan
              kompetitif dalam bidang keanekaragama hayati dan konservasi serta
              berkepribadian sesuai nilai-nilai kristiani.
            </li>
            <li className="mb-2">
              Melaksanakan penelitian dan pengabdian pada masyarakat sebagai
              salah satu proses pemantapan dan pemanfaatan ilmu untuk masyarakat
              khususnya yang berkaitan dengan progdi Biologi.
            </li>
            <li className="mb-2">
              Menjadi progdi Biologi sebagai Progdi yang diminati oleh
              masyarakat dan dipercaya sebagai lembaga pendidikan ilmiah yang di
              dalam berbagai penelitian ilmiah yang sesuai dengan ilmu biosains
              dan keaneka ragaman hayati.
            </li>
          </ol>
        </div>
      </div>
      {/* Side */}
      <div className="w-full lg:w-[24%] bg-white/[0.3] rounded-lg lg:mt-14 mt-12">
        <div className="bg-blue-600 h-10 w-11/12 mx-auto rounded-lg -mt-5 mb-4 shadow-lg flex justify-center items-center">
          <h1 className="font-arvo text-white font-bold">Dosen BI</h1>
        </div>
        <Dosen dataDosenProdi={dataDosenProdi} />
      </div>
    </motion.div>
  );
};

export default Biologi;
