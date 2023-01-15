/** @format */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useDokumen from "../../../stores/dokumen";
import useUrl from "../../../services/base_url";

const Dokumen = () => {
  const { BASE_URL } = useUrl();
  // store
  const { setJenisDokumen, dtDokumen } = useDokumen();
  // effect
  useEffect(() => {
    setJenisDokumen();

    return () => {};
  }, [setJenisDokumen]);

  const downloadFile = (data) => {
    window.open(`${BASE_URL}/storage/${data.file}`, "_blank").focus();
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
          Dokumen FST
        </h2>
        {/* card */}
        <div className="grid grid-cols-2 gap-4">
          {dtDokumen &&
            dtDokumen.map((row, index) => (
              <div key={index}>
                <article className="rounded-xl border border-gray-700/50 bg-white/30 p-4">
                  <div className="w-full">
                    <h3 className="text-black font-arvo text-center text-lg font-bold">
                      {row.nama}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {row.file_dokumen.map((fd, index) => (
                      <li key={index}>
                        <div
                          className="cursor-pointer hover:text-blue-800 font-arvo text-[16px]"
                          onClick={() =>
                            downloadFile({ file: fd.file, nama: fd.nama })
                          }
                        >
                          <span className="underline">{fd.nama}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dokumen;
