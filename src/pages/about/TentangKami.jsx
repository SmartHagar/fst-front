/** @format */

import React from "react";
import { motion } from "framer-motion";

const TentangKami = () => {
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm lg:w-3/4 min-h-[83vh]"
      >
        <h2 className="mb-5 mt-2 font-bold text-lg sm:text-2xl">
          Tentang Fakultas Sains & Teknologi
        </h2>
      </motion.div>
      <div></div>
    </div>
  );
};

export default TentangKami;
