/** @format */

import React from "react";
import { motion } from "framer-motion";

const PimpinanFST = () => {
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm lg:w-3/4"
      >
        <h2 className="mb-5 mt-2 font-bold text-2xl">Pimpinan Fakultas</h2>
      </motion.div>
      {/* Kanan */}
      <div></div>
    </div>
  );
};

export default PimpinanFST;
