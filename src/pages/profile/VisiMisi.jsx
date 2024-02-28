/** @format */

import React from "react";
import { motion } from "framer-motion";

const VisiMisi = () => {
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm md:mx-10"
      >
        <h2 className="mb-5 mt-2 font-bold text-2xl">
          Visi Misi Fakultas Sains & Teknologi
        </h2>
        <h2 className="text-center mb-3 mt-2 font-bold text-xl">Visi</h2>
        <p className="text-justify leading-6 text-lg">
          “Menjadi Fakultas yang andal dan berintegras di bidang Bidang Sains &
          Teknologi dalam mewujudkan kualitas Sumber Daya Manusia yang unggul
          dan berkarakter Kristen”.
        </p>
        <h2 className="text-center mb-3 mt-8 font-bold text-xl">Misi</h2>
        <div className="text-justify leading-6">
          <ol className="list-decimal text-lg">
            <li className="mb-2">
              Menyelenggarakan pendidikan dan pengajaran yang bermutu untuk
              menghasilkan SDM yang handal, kompetitif dan beriman di bidang
              keilmuan (sains) dan teknologi.
            </li>
            <li className="mb-2">
              Menyelenggarakan, mengembangkan dan meyebarluaskan karya ilmiah
              dan penelitian yang berbasis IPTEK.
            </li>
            <li className="mb-2">
              Mengimplementasikan hasil karya ilmiah dan penelitian di bidang
              sains dan teknologi yang bermanfaat bagi peningkatan kesejahteraan
              ,masyarakat.
            </li>
            <li className="mb-2">
              Menjalin dan mengembangkan kemitraan dan meyediakan jasa/layanan
              di bidang sains dan teknologi.
            </li>
            <li className="mb-2">
              Menciptakan dan mengembangkan atmosfir lingkungan yang kondusif
              untuk mendukung peningkatan budaya akademik bagi civitas dan
              tenaga kependidikan.
            </li>
          </ol>
        </div>
      </motion.div>
      <div></div>
    </div>
  );
};

export default VisiMisi;
