/** @format */

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import fetchDataMhs from "./getDataMhs";
import TableDefault from "../../components/table/TableDefault";
import PaginationDefault from "../../components/pagination/PaginationDefault";
import HeadSearch from "../../components/input/HeadSearch";
import { SearchDataContext } from "../../context/SearchDataContext";

const Mhs = () => {
  const { searchData } = useContext(SearchDataContext);
  // state
  const [dataMhs, setDataMhs] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("");
  const [sort, setSort] = useState("");

  const getDataMhs = async () => {
    const response = await fetchDataMhs({
      page,
      orderBy,
      sort,
      search: searchData,
    });
    setDataMhs(response?.data);
  };
  useEffect(() => {
    getDataMhs();
    return () => {};
  }, [page, orderBy, sort]);

  // ketika search berubah
  useEffect(() => {
    setPage(1);
    getDataMhs();

    return () => {};
  }, [searchData]);

  // table
  const headTable = ["No", "NPM", "Nama", "Progdi", "Jenkel", "Angkatan"];
  const tableBodies = [
    "NPM_FULL",
    "nama",
    "prodi.nama",
    "jenkel",
    "thn_angkatan",
  ];

  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm"
      >
        <h2 className="mb-5 mt-2 font-bold text-2xl text-center">
          Daftar Mahasiswa Fakultas Sains & Teknologi
        </h2>
        <div>
          <HeadSearch placeholder="Cari NPM atau Nama Mahasiswa" />
        </div>
        <div>
          <TableDefault
            dataTable={dataMhs?.data}
            tableBodies={tableBodies}
            headTable={headTable}
            page={page}
            hapus={false}
            ubah={false}
          />
        </div>
        {dataMhs?.last_page > 1 && (
          <div className="mt-4">
            <PaginationDefault
              currentPage={dataMhs?.current_page}
              totalPages={dataMhs?.last_page}
              setPage={setPage}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Mhs;
