/** @format */

import React from "react";
import { motion } from "framer-motion";

const PimpinanProdi = () => {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      className="w-full font-arvo text-sm"
    >
      <h2 className="mb-5 mt-2 font-bold text-2xl text-center">
        Pimpinan Program Studi
      </h2>
      <div className="flex w-full justify-center flex-col items-center gap-4">
        {/* wakil dekan */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="flex flex-col items-center">
            <img
              src="/pimpinan/bpk_axel.jpeg"
              alt=""
              srcset=""
              className="rounded-md h-64"
            />
            <div className="text-center mt-2">
              <h1 className="text-lg font-bold">Prodi Sistem Informasi</h1>
              <h2 className=" font-bold">Axelon S Renyaan,S.SI.,M.T</h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/pimpinan/bingkai.png"
              alt=""
              srcset=""
              className="rounded-md h-64"
            />
            <div className="text-center mt-2">
              <h1 className="text-lg font-bold">Prodi Biologi</h1>
              <h2 className=" font-bold">Inggrid Nortalia Kailola, M. Si</h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/pimpinan/bingkai.png"
              alt=""
              srcset=""
              className="rounded-md h-64"
            />
            <div className="text-center mt-2">
              <h1 className="text-lg font-bold">Prodi Teknik Geologi</h1>
              <h2 className=" font-bold"></h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PimpinanProdi;
