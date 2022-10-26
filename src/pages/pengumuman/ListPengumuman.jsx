/** @format */

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Paginate from "../../components/pagination/Paginate";
import usePengumuman from "../../stores/pengumuman";
import { Link, useParams } from "react-router-dom";
import { DashbordContext } from "../../context/dashboard";
import PengumumanModal from "../../components/modals/PengumumanModal";

import moment from "moment";
import "moment/locale/id";

moment.locale("id");

const ListPengumuman = () => {
  const { setPengumuman, dataPengumuman } = usePengumuman();

  const { id } = useParams();

  const [page, setPage] = useState(1);
  const [dtProdi, setDtProdi] = useState([]);

  useEffect(() => {
    const fetch = async (page) => {
      const res = await setPengumuman(page);
      const filterData = res.data.data.filter((row) => row.prodi_id === id);
      setDtProdi(filterData);
    };

    fetch(page);
  }, [id, page, setPage, setPengumuman]);
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState({});
  const handelClick = (row) => {
    setOpen(true);
    setRow(row);
  };

  return (
    <DashbordContext.Provider value={{ setOpen, open, setRow, row }}>
      {/* Open Modal */}
      <PengumumanModal />
      <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
        {dtProdi && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="w-full font-arvo text-sm lg:w-3/4"
          >
            <div>
              <h2 className="mb-5 mt-2 font-bold text-lg sm:text-2xl text-center">
                {dtProdi.length > 0
                  ? `Pengumuman ${
                      dtProdi[0].prodi.kd_prodi !== "FST" ? "Prodi" : ""
                    } ${dtProdi[0].prodi.nm_prodi}`
                  : "Memuat..."}
                {console.log(dtProdi)}
              </h2>
            </div>
            {dtProdi.length > 0 &&
              dtProdi.map((row, index) => (
                <article
                  onClick={() => handelClick(row)}
                  key={index}
                  className="cursor-pointer rounded-xl border-2 border-gray-100 hover:bg-white bg-white/[0.4] mb-2"
                >
                  <div className="flex items-start p-1 font-cabin">
                    <div className="ml-4">
                      <h3 className="sm:text-lg font-bold hover:underline cursor-pointer">
                        {row.judul_pengumuman}
                      </h3>
                      <>
                        <div
                          className="md:hidden text-sm text-black line-clamp-2 mr-2"
                          dangerouslySetInnerHTML={{
                            __html:
                              row.isi_pengumuman.substring(0, 250) + "...",
                          }}
                        ></div>
                        <div
                          className="text-sm md:block hidden text-black line-clamp-2 mr-2"
                          dangerouslySetInnerHTML={{
                            __html:
                              row.isi_pengumuman.substring(0, 550) + "...",
                          }}
                        ></div>
                      </>
                      <span>
                        {moment(row.tgl_pengumuman).format("DD MMMM YY")}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
          </motion.div>
        )}
        {/* side */}
        <div className="w-full lg:w-[24%] bg-white/[0.3] rounded-lg lg:mt-14 mt-8">
          <div className="bg-blue-600 h-10 w-11/12 mx-auto rounded-lg -mt-5 mb-4 shadow-lg flex justify-center items-center">
            <h1 className="font-arvo text-white font-bold">Pengumuman</h1>
          </div>
          <div className="font-comic-neue w-full ml-3">
            <ul>
              <Link to="/pengumuman/4">
                <li className="text-indigo-800 hover:underline cursor-pointer mb-2">
                  Fakultas
                </li>
              </Link>
              <Link to="/pengumuman/1">
                <li className="text-blue-800 hover:underline cursor-pointer mb-2">
                  Sistem Informasi
                </li>
              </Link>
              <Link to="/pengumuman/3">
                <li className="text-green-800 hover:underline cursor-pointer mb-2">
                  Biologi
                </li>
              </Link>
              <Link to="/pengumuman/2">
                <li className="text-orange-800 hover:underline cursor-pointer">
                  Teknik Geologi
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </DashbordContext.Provider>
  );
};

export default ListPengumuman;
