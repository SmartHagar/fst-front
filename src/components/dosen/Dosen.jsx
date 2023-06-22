/** @format */

import React from "react";

const Dosen = ({ dataDosenProdi }) => {
  return (
    dataDosenProdi &&
    dataDosenProdi.map((row, index) => (
      <div key={index} className="px-2 font-cabin mb-3 overflow-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 text-md">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap py-1 text-gray-700 w-10">
                Nama
              </td>
              <td className="whitespace-nowrap py-1 text-gray-700">:</td>
              <td className="whitespace-nowrap py-1 text-gray-700 pl-4">
                {row.nm_dosen}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-1 text-gray-700">NIDN</td>
              <td className="whitespace-nowrap py-1 text-gray-700">:</td>
              <td className="whitespace-nowrap py-1 text-gray-700 pl-4">
                {row.NIDN}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap py-1 text-gray-700">Jabatan</td>
              <td className="whitespace-nowrap py-1 text-gray-700">:</td>
              <td className="whitespace-nowrap py-1 text-gray-700 pl-4">
                {row.jabatan}
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    ))
  );
};

export default Dosen;
