/** @format */

import React from "react";
import { motion } from "framer-motion";
import PimpinanProdi from "./PimpinanProdi";

const PimpinanFST = () => {
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 mb-10">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm mb-10"
      >
        <h2 className="mb-5 mt-2 font-bold text-2xl text-center">
          Pimpinan Fakultas
        </h2>
        <div className="flex w-full justify-center flex-col items-center gap-y-8">
          {/* dekan */}
          <div className="flex flex-col items-center">
            <img
              src="/pimpinan/IbuFegie.jpeg"
              alt=""
              srcset=""
              className="rounded-md h-72"
            />
            <div className="text-center mt-2">
              <h1 className="text-xl font-bold">Dekan</h1>
              <h2 className="font-bold">Fegie Y Wattimena,S.T.,M.Kom</h2>
            </div>
          </div>
          {/* wakil dekan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-16 ">
            <div className="flex flex-col items-center">
              <img
                src="/pimpinan/IbuIra.jpeg"
                alt=""
                srcset=""
                className="rounded-md h-64"
              />
              <div className="text-center mt-2">
                <h1 className="text-lg font-bold">Wakil Dekan I</h1>
                <h2 className=" font-bold">Iriani. Ira Bukorpioper, M. Si</h2>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/pimpinan/IbuDikta.jpeg"
                alt=""
                srcset=""
                className="rounded-md h-64"
              />
              <div className="text-center mt-2">
                <h1 className="text-lg font-bold">Wakil Dekan II</h1>
                <h2 className=" font-bold">Ermy Dikta Sumanik, S.Pd.,M.Li</h2>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <PimpinanProdi />
    </div>
  );
};

export default PimpinanFST;
