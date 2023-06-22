/** @format */

import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import BeritaCard from "../../components/cards/BeritaCard";
import useBerita from "../../stores/berita";
import { motion } from "framer-motion";
import useUrl from "../../services/base_url";

const BeritaDetail = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { idBerita, tag } = useParams();
  const { url_storage } = useUrl();

  const {
    setBerita,
    dataRandomBerita,
    setRandomBerita,
    setShowBerita,
    dtShowBerita,
  } = useBerita();

  // memanggil show berita
  useEffect(() => {
    // membuang fst- dari idBerita
    const id = idBerita.split("-")[1];
    setShowBerita({ id, tag });
  }, [idBerita, tag, setShowBerita]);

  useEffect(() => {
    setBerita();
    setRandomBerita();
  }, [pathname, setBerita, setRandomBerita]);
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10">
      {dtShowBerita && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          key={dtShowBerita.id}
          className="w-full font-arvo text-sm lg:w-3/4 min-h-[83vh]"
        >
          <h2 className="mb-5 mt-2 font-bold text-md sm:text-xl text-center">
            {dtShowBerita.judul}
          </h2>
          <div>
            <img src={`${url_storage}/${dtShowBerita.gambar_berita}`} alt="" />
          </div>
          <div
            className="mt-6 leading-6"
            dangerouslySetInnerHTML={{
              __html: dtShowBerita.isi_berita,
            }}
          ></div>
        </motion.div>
      )}
      <div className="w-full lg:w-[24%] bg-white/[0.3] rounded-lg lg:mt-14 mt-8">
        <div className="bg-blue-600 h-10 w-11/12 mx-auto rounded-lg -mt-5 mb-4 shadow-lg flex justify-center items-center">
          <h1 className="font-arvo text-white font-bold">Berita Random</h1>
        </div>
        <BeritaCard dataCard={dataRandomBerita} random={true} />
      </div>
    </div>
  );
};

export default BeritaDetail;
