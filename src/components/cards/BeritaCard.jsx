/** @format */

import React from "react";
import { Link } from "react-router-dom";
import useUrl from "../../services/base_url";
import ImgLoading from "../loading/ImgLoading";

const BeritaCard = ({ dataCard, random }) => {
  const { BASE_URL } = useUrl();
  return dataCard.data ? (
    dataCard.data.map((row, index) => {
      const { gambar_berita, judul, isi_berita, penulis } = row;
      return (
        <article
          key={index}
          className="rounded-xl border-2 border-gray-100 hover:bg-white bg-white/[0.4] mb-2"
        >
          <div className="flex items-start p-1 font-cabin">
            {!random && (
              <div className="block shrink-0">
                <img
                  alt="Speaker"
                  src={`${BASE_URL}/storage/${gambar_berita}`}
                  className="h-36 w-40 rounded-lg object-cover"
                />
              </div>
            )}

            <div className="ml-4">
              <h3 className="sm:text-lg font-bold">
                <Link
                  to="/berita/detail"
                  state={{ row, BASE_URL }}
                  className="hover:underline cursor-pointer"
                >
                  {!random ? judul : judul.substring(0, 25) + "..."}
                </Link>
              </h3>
              {!random && (
                <>
                  <div
                    className="md:hidden text-sm text-black line-clamp-2 mr-2"
                    dangerouslySetInnerHTML={{
                      __html: isi_berita.substring(0, 250) + "...",
                    }}
                  ></div>
                  <div
                    className="text-sm md:block hidden text-black line-clamp-2 mr-2"
                    dangerouslySetInnerHTML={{
                      __html: isi_berita.substring(0, 550) + "...",
                    }}
                  ></div>
                </>
              )}

              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                  Posted by
                  <span className="ml-1 font-medium underline hover:text-gray-700">
                    {penulis}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </article>
      );
    })
  ) : (
    <ImgLoading />
  );
};

export default BeritaCard;
