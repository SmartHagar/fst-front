/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useDosen from "../../stores/dosen";
import Dosen from "../../components/dosen/Dosen";

const Geologi = () => {
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
          Visi Misi Program Studi Teknik Geologi
        </h2>
        <h2 className="text-center mb-3 mt-2 font-bold text-xl">Visi</h2>
        <p className="text-justify leading-6 text-lg">
          “Menjadi Program Studi yang andal dan berintegritas di bidang bidang
          Geologi Pertambangan-mineral, Geologi Energi-migas dan Geologi
          lingkungan,dalam mewujudkan kualitas SDM yang unggul dan berkarakter
          Kristen.”
        </p>
        <h2 className="text-center mb-3 mt-8 font-bold text-xl">Misi</h2>
        <div className="text-justify leading-6 text-lg">
          <ol className="list-decimal">
            <li className="mb-2">
              Menyelenggarakan pengajaran Teknik Geologi secara efektif dan
              efisien yang terkait di bidang bidang Geologi
              Pertambangan-Mineral, Geologi Migas dan Geologi Lingkungan.
            </li>
            <li className="mb-2">
              Melaksanakan penelitian Teknik Geologi terkait keanekaragaman
              hayati dan konservasi
            </li>
            <li className="mb-2">
              Memberikan bimbingan, penyuluhan dan pengabdian kepada masyarakat
              terkait bidang Geologi Pertambangan-Mineral, Geologi Migas dan
              Geologi Lingkungan.
            </li>
            <li className="mb-2">
              Membangun kerjasama dengan pemangku kepentingan didalam maupun
              diluar negeri dibidang pendidikan, penelitan dan pengabdian
              masyarakat yang berkaitan dengan pemanfaatan bidang Geologi
              Pertambangan-Mineral, Geologi Migas dan Geologi Lingkungan.
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
