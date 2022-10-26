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
        <p className="text-justify leading-6">
          Menyiapkan Sumber Daya Manusia yang Kompetetif di Tanah Papua pada
          Tahun 2021 dalam bidang Rekayasa Perangkat Lunak dalam memasuki era
          industri 4.0 serta memiliki kepribadian yang Pancasilais dan takut
          akan Tuhan.
        </p>
        <h2 className="text-center mb-3 mt-8 font-bold text-xl">Misi</h2>
        <div className="text-justify leading-6">
          <ol className="list-decimal">
            <li className="mb-2">
              Menyelenggarakan pendidikan dan pengajaran yang bermutu untuk
              menghasilakan SDM yang handal, kompetitif dan beriman di bidang
              keilmuan (sains) dan teknologi.{" "}
            </li>
            <li className="mb-2">
              Menyelenggarakan, mengembangkan, dan menyebarluaskan karya ilmiah
              dan penelitian yang berbasis IPTEKS.{" "}
            </li>
            <li className="mb-2">
              Mengimplementasikan hasil karya ilmiah dan penelitian di bidang
              sains dan teknologi yang bermanfaat bagi peningkatan kesejahteraan
              masyarakat.
            </li>
            <li className="mb-2">
              Menjalin dan mengembangkan kemitraan dan menyediahkan jasa/layanan
              di bidang sains dan teknologi.
            </li>
            <li className="mb-2">
              Menciptakan dan mengembangkan atmosfir lingkungan yang kondusif
              untuk mendukung peningkatan budaya akademik bagi sivitas dan
              tenaga kependidikan.{" "}
            </li>
          </ol>
          <div className="mt-6">
            <p className="text-justify leading-6">
              Teknologi Informasi senantiasa berkembang dengan pesat. Keberadaan
              Teknologi Informasi telah mentransformasi kehidupan manusia,
              misalnya dengan munculnya teknologi web, multimedia, mobile dan
              jaringan sosial. Perkembangan teknologi tersebut tentunya
              berpengaruh terhadap kegiatan bisnis, manajemen, pemerintahan,
              pendidikan, dan sebagainya.
            </p>
            <p className="text-justify leading-6 mt-2">
              Program Studi Sistem Informasi di bawah naungan Fakultas Sains Dan
              Teknologi (FST UOGP), program ini memberikan kesempatan kepada
              lulusan SMA/sederajat yang terbaik untuk mendapatkan pendidikan
              dan keahlian di bidang Sistem Informasi/Teknologi Informasi pada
              tingkat sarjana (S1). Program ini dirancang untuk memenuhi
              kebutuhan terhadap tenaga-tenaga muda yang terampil dan
              profesional, terutama terkait dengan pengembangan, pemanfaatan,
              dan pengelolaan Sistem Informasi/Teknologi Informasi dalam suatu
              organisasi.
            </p>
          </div>
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
