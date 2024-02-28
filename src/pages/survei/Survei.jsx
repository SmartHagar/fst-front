/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useDokumen from "../../stores/dokumen";
import useUrl from "../../services/base_url";
import dtSurvei from "./SurveiData";

const Survei = () => {
  const { BASE_URL } = useUrl();
  // store
  const { setJenisDokumen, dtDokumen } = useDokumen();
  // effect
  useEffect(() => {
    setJenisDokumen();

    return () => {};
  }, [setJenisDokumen]);

  const downloadFile = (data) => {
    window.open(data, "_blank").focus();
    console.log("cetak");
  };

  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm"
      >
        <h2 className="mb-5 mt-2 font-bold text-2xl text-center">
          Survei Kepuasan Pengguna
        </h2>
        <p className="text-lg">
          Halaman ini bertujuan untuk menampilkan hasil survei kepuasan pengguna
          terhadap Fakultas Sains & Teknologi Universitas Ottow Geissler Papua.
          Hasil survei ini diharapkan dapat meningkatkan kualitas program studi
          dan memberikan layanan yang lebih baik kepada pengguna.
        </p>
        {/* card */}
        <div className="w-full font-arvo text-sm min-h-[83vh] mt-8">
          <h2 className="mb-4 mt-2 font-bold text-lg sm:text-xl">
            Hasil Survei Kepuasan Prodi Biologi
          </h2>
          <ol className="text-lg">
            {dtSurvei.map((data, index) => {
              return (
                <li className="list-decimal list-inside mb-2 capitalize">
                  <a
                    target="_blank"
                    href={data.file}
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {data.nama.toLowerCase()}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default Survei;
