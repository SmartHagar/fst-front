/** @format */

import React from "react";
import moment from "moment";
import useUrl from "./base_url";

const GetProperty = (obj, prop) => {
  const { BASE_URL } = useUrl();
  // mengambil 2 angka terakhir
  const angkatan = obj?.thn_angkatan?.substring(2);
  const mhs_angkatan = obj?.mhs?.thn_angkatan?.substring(2);
  var parts = prop.split(".");
  if (Array.isArray(parts)) {
    var last = parts.length > 1 ? parts.pop() : parts;
    // jika gabungan antara kode dan no urut
    if (last.includes("sks_smt")) {
      return `${obj["matkul"]["sks"]}-${obj["matkul"]["semester"]}`;
    }
    if (last.includes("jadwal_jam")) {
      return `${obj["jadwal"]["mulai"]} - ${obj["jadwal"]["seles"]}`;
    }
    if (last.includes("NPM_FULL")) {
      return `${obj["prodi"]["kode"]}${angkatan}${obj["NPM"]}`;
    }
    if (last.includes("MHS_NPM_FULL")) {
      return `${obj["mhs"]["prodi"]["kode"]}${mhs_angkatan}${obj["mhs"]["NPM"]}`;
    }
    var l = parts.length,
      i = 1,
      current = parts[0];
    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }

    if (typeof obj === "object") {
      return obj ? obj[last] : "";
    }

    if (prop === "image") {
      return obj && <img src={`${BASE_URL}/${obj}`} alt="" className="h-20" />;
    }
    if (prop === "mulai_date") {
      return moment(obj).format("DD-MMM-YYYY");
    }
    if (prop === "seles_date") {
      return moment(obj).format("DD-MMM-YYYY");
    }
    return obj;
  } else {
    // eslint-disable-next-line no-throw-literal
    throw "parts is not valid array";
  }
};

export default GetProperty;
