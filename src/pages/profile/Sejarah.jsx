/** @format */

import React from "react";
import { motion } from "framer-motion";

const Sejarah = () => {
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm lg:w-3/4"
      >
        <h2 className="mb-5 mt-2 font-bold text-2xl">
          Sejarah Fakultas Sains & Teknologi
        </h2>
        <p className="text-justify leading-6">
          Sebagai suatu Perguruan Tinggi Kristen Nasional, maka perancangan dan
          penyelenggaraan organisasi dan manajemen FST UOG Papua selalu mengacu
          kepada peraturan perundangan dan yang berlaku serta kebijakan GKI Di
          Tanah Papua, Yayasan Ottow Geissler (YOG) Di Tanah Papua, dan
          Universitas Ottow Geissler (UOG) Papua. Sejak berdirinya UOG Papua
          sebagai hasil perubahan bentuk dari STIE Ottow & Geissler Jayapura,
          maka FST selalu menghadapi lingkungan eksternal yang terus menerus
          berubah, yang menimbulkan peluang-peluang dan ancaman-ancaman. Agar
          FST UOG Papua tetap eksis, bertumbuh, dan bahkan berkembang untuk
          mewujudkan Visi, Misi, dan Tujuannya, maka harus dilakukan perubahan
          internal yang sesuai (match) dan bersifat adaptif terhadap desakan
          perubahan eksternal dan internal, terutama perubahan aturan pemerintah
          yang relevan dengan bidang pendidikan tinggi secara nasional dan lokal
          (daerah) untuk memenuhi kebutuhan dunia kerja.
        </p>
        <p className="text-justify mt-2 leading-6">
          Fakultas Sains dan Teknologi (FST) Universitas Ottow Geissler Papua
          (UOGP) berdiri tanggal 23 maret 2011 berdasarkan keputusan Dirjen
          DIKTI Nomor. 52/E/O/2011. Latar belakang utama berdirinya FST UOGP
          adalah sebagai bentuk partisipasi UOGP serta mencerdaskan kehidupan
          rakyat dan bangsa. Selain itu sebagai respon UOGP terhadap
          perkembangan dunia ilmu pengetahuan dan teknologi yang sangat pesat
          dengan tetap mengutamakan nilai-nillai kekristenan dalam segala bentuk
          kegiataanya.
        </p>
      </motion.div>
      {/* Kanan */}
      <div></div>
    </div>
  );
};

export default Sejarah;
