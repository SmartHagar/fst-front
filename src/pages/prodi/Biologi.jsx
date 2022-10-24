/** @format */

import React from "react";

const Biologi = () => {
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10 min-h-[83vh]">
      <div className="w-full font-arvo text-sm lg:w-3/4">
        <h2 className="mb-5 mt-2 font-bold text-lg sm:text-2xl">
          Visi Misi Program Studi Biologi
        </h2>
        <h2 className="text-center mb-3 mt-2 font-bold text-xl">Visi</h2>
        <p className="text-justify leading-6">
          Visi Program Studi Biologi disusun dengan mengacu kepada Visi Fakultas
          Sains & Teknologi dan Visi Universitas Ottow Geissler Papua, adalah :
          “Menghasilkan Sunber Daya Manusia yang berintelektual dan kompetitif
          di Tanah Papua pada Tahun 2020 dibidang Keanekaragaman Hayati dan
          Konservasi serta memiliki kepribadian yang Pancasilais dan takut akan
          Tuhan.
        </p>
        <h2 className="text-center mb-3 mt-8 font-bold text-xl">Misi</h2>
        <div className="text-justify leading-6">
          <p className="mb-2">
            Untuk mewujudkan visi tersebut diatas selanjutnya dirumuskan Misi
            Program Studi Biologi Fakultas Sains & Teknologi Universitas Ottow
            Geissler Papua sebagai berikut:
          </p>
          <ol className="list-decimal">
            <li className="mb-2">
              Menyelenggarakan pendidikan dan pengajaran yang bermutu
              sertamenciptakan suasana lingkungan kampus yang kondusif untuk
              menghasilkan sarjana ilmu biologi yang berintelektual dan
              kompetitif dalam bidang keanekaragama hayati dan konservasi serta
              berkepribadian sesuai nilai-nilai kristiani.
            </li>
            <li className="mb-2">
              Melaksanakan penelitian dan pengabdian pada masyarakat sebagai
              salah satu proses pemantapan dan pemanfaatan ilmu untuk masyarakat
              khususnya yang berkaitan dengan progdi Biologi.
            </li>
            <li className="mb-2">
              Menjadi progdi Biologi sebagai Progdi yang diminati oleh
              masyarakat dan dipercaya sebagai lembaga pendidikan ilmiah yang di
              dalam berbagai penelitian ilmiah yang sesuai dengan ilmu biosains
              dan keaneka ragaman hayati.
            </li>
          </ol>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Biologi;
