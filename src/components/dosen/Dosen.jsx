/** @format */

import React from "react";

const Dosen = ({ dataDosenProdi }) => {
  return (
    dataDosenProdi &&
    dataDosenProdi.map((row, index) => (
      <div key={index} className="px-2 font-cabin mb-3 overflow-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 text-md">
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap py-1 text-gray-700">Nama</td>
              <td class="whitespace-nowrap py-1 text-gray-700">:</td>
              <td class="whitespace-nowrap py-1 text-gray-700">
                {row.nm_dosen}
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-1 text-gray-700">NIDN</td>
              <td class="whitespace-nowrap py-1 text-gray-700">:</td>
              <td class="whitespace-nowrap py-1 text-gray-700">{row.NIDN}</td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-1 text-gray-700">Jabatan</td>
              <td class="whitespace-nowrap py-1 text-gray-700">:</td>
              <td class="whitespace-nowrap py-1 text-gray-700">
                {row.jabatan}
              </td>
            </tr>
          </tbody>
          <hr />
        </table>
      </div>
    ))
  );
};

export default Dosen;
