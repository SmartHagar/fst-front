/** @format */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BeritaCard from "../../components/cards/BeritaCard";
import useBerita from "../../stores/berita";
import { motion } from "framer-motion";

const BeritaDetail = () => {
  const location = useLocation();
  const state = location.state;
  const pathname = location.pathname;

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(state);
  }, [pathname, state]);

  const { setBerita, dataBerita } = useBerita();

  useEffect(() => {
    setBerita();
  }, [pathname, setBerita]);
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10">
      {data.row && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          key={data.row.id}
          className="w-full font-arvo text-sm lg:w-3/4 min-h-[83vh]"
        >
          <h2 className="mb-5 mt-2 font-bold text-md sm:text-xl text-center">
            {data.row.judul}
          </h2>
          <div>
            <img
              src={`${data.BASE_URL}/storage/${data.row.gambar_berita}`}
              alt=""
            />
          </div>
          <div
            className="mt-6 leading-6"
            dangerouslySetInnerHTML={{
              __html: data.row.isi_berita,
            }}
          ></div>
        </motion.div>
      )}
      <div className="w-full lg:w-[24%] bg-white/[0.3] rounded-lg lg:mt-14 mt-8">
        <div className="bg-blue-600 h-10 w-11/12 mx-auto rounded-lg -mt-5 mb-4 shadow-lg flex justify-center items-center">
          <h1 className="font-arvo text-white font-bold">Berita Random</h1>
        </div>
        <BeritaCard dataCard={dataBerita} random={true} />
      </div>
    </div>
  );
};

export default BeritaDetail;
