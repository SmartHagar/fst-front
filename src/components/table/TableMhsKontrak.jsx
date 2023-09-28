/** @format */

import React from "react";
import { BsCardText } from "react-icons/bs";
import getProperty from "../../services/getProperty";

const TableMhsKontrak = ({
  headTable = [],
  dataTable,
  tableBodies,
  limit = 10,
  page,
  addClass,
  rowAdd,
  columnAdd,
  detail,
  showDetail,
  dtJawabanMhs,
}) => {
  const showNo = (index) => {
    let noUrut = (page - 1) * limit + index;
    return noUrut + 1;
  };
  // console.log({ dtJawabanMhs });

  const handleJadwal = () => {
    console.log("test");
  };
  return (
    <table className="w-full border-collapse text-left">
      <thead className="">
        <tr>
          {headTable &&
            headTable.map((row, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-4 ${row === rowAdd && addClass}`}
              >
                {row}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
        {/* loop tr */}
        {dataTable &&
          dataTable.map((row, index) => {
            const jadwal_id = row.kontrak.map((item) => item.jadwal_id);
            const jawaban = dtJawabanMhs.filter(
              (item) =>
                jadwal_id.includes(item.jadwal_id) && item.mhs_id === row.id
            );
            return (
              <tr
                key={index}
                className="hover:bg-gray-50 hover:text-title cursor-pointer"
                onClick={() => handleJadwal(row)}
              >
                <td className="px-6 py-4 rounded-l-xl">{showNo(index)}</td>
                {/* loop td */}
                {tableBodies.map((column, index) => {
                  return (
                    <td
                      key={index}
                      className={`px-6 py-4 ${
                        column === columnAdd && addClass
                      }`}
                    >
                      {getProperty(row, column)}
                    </td>
                  );
                })}
                {/* jumlah penilaian */}
                <td
                  className={`px-6 py-4 ${
                    row.kontrak_count > jawaban.length &&
                    "text-red-500 font-bold"
                  }`}
                >
                  {jawaban.length}
                </td>
                {/* aksi */}
                <td className="px-6 py-4 rounded-r-xl">
                  <div className="flex flex-row gap-2">
                    {detail && (
                      <BsCardText
                        onClick={() => showDetail(row)}
                        size={20}
                        className="cursor-pointer hover:text-green-600"
                      />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableMhsKontrak;
