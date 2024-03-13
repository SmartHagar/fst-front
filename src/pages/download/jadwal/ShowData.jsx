/** @format */

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import TableDefault from "../../../components/table/TableDefault";
import HeadSearch from "../../../components/input/HeadSearch";
import PaginationDefault from "../../../components/pagination/PaginationDefault";
import useJadwalApiEdom from "../../../stores/jadwal";
import { useSearchParams } from "react-router-dom";
import { SearchDataContext } from "../../../context/SearchDataContext";
import { Button } from "@material-tailwind/react";
import useUrl from "../../../services/base_url";

const ShowData = () => {
  const { URL_EDOM } = useUrl();
  const { searchData } = useContext(SearchDataContext);
  // params
  const [searchParams] = useSearchParams();
  // store
  const { setJadwal, dtJadwal } = useJadwalApiEdom();
  // state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  // ambil data jadwal
  // get params semester dan tahun
  const semester = searchParams.get("semester") || "";
  const tahun = searchParams.get("tahun") || "";
  const fetchDataJadwal = async () => {
    setIsLoading(true);
    const res = await setJadwal({
      page,
      limit,
      search: searchData,
      semester,
      tahun,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    if (semester && tahun) {
      fetchDataJadwal();
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, searchParams, semester, tahun]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataJadwal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData]);
  // table
  const headTable = [
    "No",
    "Hari",
    "Jam",
    "Mata Kuliah",
    "Kode MK",
    "JML. SKS",
    "Progdi SMT",
    "Ruangan",
    "Dosen",
  ];
  const tableBodies = [
    "hari",
    "mulai_seles",
    "matkul.nama",
    "matkul.kode",
    "matkul.sks",
    "progdi_smt",
    "ruangan.nama",
    "dosen.nama",
  ];
  const cetak = () => {
    // open link
    window
      .open(
        `${URL_EDOM}/cetak/jadwal?semester=${semester}&tahun=${tahun}`,
        "_blank"
      )
      .focus();
  };
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm"
      >
        <h2 className="mb-2 mt-2 font-bold text-2xl text-center">
          Jadwal Fakultas Sains & Teknologi
        </h2>
        <h3 className="mb-5 mt-2 font-bold text-xl text-center">
          Semester {semester} Tahun {tahun}
        </h3>
        <div className="flex gap-2">
          <HeadSearch placeholder="Cari data" />
          <Button
            variant="filled"
            onClick={cetak}
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Cetak</span>
          </Button>
        </div>
        <div className="text-base">
          <TableDefault
            dataTable={dtJadwal?.data}
            tableBodies={tableBodies}
            headTable={headTable}
            page={page}
            hapus={false}
            ubah={false}
          />
        </div>
        {dtJadwal?.last_page > 1 && (
          <div className="mt-4">
            <PaginationDefault
              currentPage={dtJadwal?.current_page}
              totalPages={dtJadwal?.last_page}
              setPage={setPage}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ShowData;
