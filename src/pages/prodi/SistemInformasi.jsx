/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useDosen from "../../stores/dosen";

import Dosen from "../../components/dosen/Dosen";

const SistemInformasi = () => {
  const { setDosenProdi, dataDosenProdi } = useDosen();

  useEffect(() => {
    setDosenProdi(1);
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
          Visi Misi Program Studi Sistem Informasi
        </h2>
        <h2 className="text-center mb-3 mt-2 font-bold text-xl">Visi</h2>
        <p className="text-justify leading-6 text-lg">
          “Menjadi Program Studi yang andal dan berintegritas di bidang Sistem
          Informasi dan IPTEK dalam mewujudkan Kualitas Sumberdaya Manusia yang
          Unggul dan berkarakter Kristen”
        </p>
        <h2 className="text-center mb-3 mt-8 font-bold text-xl">Misi</h2>
        <div className="text-justify leading-6 text-lg">
          <ol className="list-decimal">
            <li className="mb-2">
              Menyelenggarakan Pendidikan dan pengajaran yang bermutu dengan
              lingkungan kampus yang kondusif untuk menghasilkan sarjana SI di
              bidang Pengembangan SI
            </li>
            <li className="mb-2">
              Menyelenggarakan penelitian yang berkualitas dan bermanfaat di
              bidang SI
            </li>
            <li className="mb-2">
              Mendarmabaktikan keahlian dalam bidang SI kepada masyarakat.
            </li>
          </ol>
        </div>
      </div>
      {/* Side */}
      <div className="w-full lg:w-[24%] bg-white/[0.3] rounded-lg lg:mt-14 mt-12">
        <div className="bg-blue-600 h-10 w-11/12 mx-auto rounded-lg -mt-5 mb-4 shadow-lg flex justify-center items-center">
          <h1 className="font-arvo text-white font-bold">Dosen SI</h1>
        </div>
        {console.log(dataDosenProdi)}
        <Dosen dataDosenProdi={dataDosenProdi} />
      </div>
    </motion.div>
  );
};

export default SistemInformasi;
