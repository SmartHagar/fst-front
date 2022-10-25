/** @format */

import React, { useEffect } from "react";
import BeritaCard from "../../components/cards/BeritaCard";
import useBerita from "../../stores/berita";
import { motion } from "framer-motion";

const ListBerita = () => {
  const { setBerita, dataBerita } = useBerita();

  useEffect(() => {
    setBerita();
  }, [setBerita]);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="flex flex-wrap justify-between mx-2 md:mx-10"
    >
      <div className="w-full font-arvo text-sm lg:w-3/4 min-h-[83vh]">
        <h2 className="mb-5 mt-2 font-bold text-lg sm:text-2xl">
          Berita Fakultas Sains & Teknologi
        </h2>
        <div>
          <BeritaCard dataCard={dataBerita} random={false} />
        </div>
      </div>
      <div className="w-full lg:w-[24%] bg-white/[0.3] rounded-lg lg:mt-14 mt-8">
        <div className="bg-blue-600 h-10 w-11/12 mx-auto rounded-lg -mt-5 mb-4 shadow-lg flex justify-center items-center">
          <h1 className="font-arvo text-white font-bold">Berita Random</h1>
        </div>
        <BeritaCard dataCard={dataBerita} random={true} />
      </div>
    </motion.div>
  );
};

export default ListBerita;
