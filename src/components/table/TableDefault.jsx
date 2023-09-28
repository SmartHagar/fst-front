/** @format */

import React from "react";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsCardText,
  BsFillPatchPlusFill,
} from "react-icons/bs";
import getProperty from "../../services/getProperty";

const TableDefault = ({
  headTable = [],
  dataTable,
  tableBodies,
  setEdit,
  setDelete,
  limit = 10,
  page,
  ubah = true,
  hapus = true,
  addClass,
  rowAdd,
  columnAdd,
  detail,
  showDetail,
}) => {
  const showNo = (index) => {
    let noUrut = (page - 1) * limit + index;
    return noUrut + 1;
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
          dataTable.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 hover:text-title">
              <td className="px-6 py-4 rounded-l-xl">{showNo(index)}</td>
              {/* loop td */}
              {tableBodies.map((column, index) => {
                return (
                  <td
                    key={index}
                    className={`px-6 py-4 ${column === columnAdd && addClass}`}
                  >
                    {getProperty(row, column)}
                  </td>
                );
              })}
              {/* aksi */}
              <td className="px-6 py-4 rounded-r-xl">
                <div className="flex flex-row gap-2">
                  {ubah && (
                    <BsFillPencilFill
                      onClick={() => setEdit(row)}
                      size={20}
                      className="cursor-pointer hover:text-yellow-500"
                    />
                  )}
                  {hapus && (
                    <BsFillTrashFill
                      onClick={() => setDelete(row.id)}
                      size={20}
                      className="cursor-pointer hover:text-red-700"
                    />
                  )}
                  {row?.tipe === "Objektif" && (
                    <BsFillPatchPlusFill
                      onClick={() => showDetail(row)}
                      size={20}
                      className="cursor-pointer hover:text-green-700"
                    />
                  )}
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
          ))}
      </tbody>
    </table>
  );
};

export default TableDefault;
