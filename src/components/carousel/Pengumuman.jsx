/** @format */

import React, { useContext } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Mousewheel } from "swiper";
import { DashbordContext } from "../../context/dashboard";
// dataPengumuman
const Pengumuman = () => {
  const { dataPengumuman } = useContext(DashbordContext);

  const dtPeng = dataPengumuman.data;

  const colorTitle = (kd_prodi) => {
    if (kd_prodi === "FST") {
      return "active:text-indigo-500";
    }
    if (kd_prodi === "SI") {
      return "active:text-blue-500";
    }
    if (kd_prodi === "BI") {
      return "active:text-green-500";
    }
    if (kd_prodi === "TG") {
      return "active:text-orange-500";
    }
  };

  const colorIsi = (kd_prodi) => {
    if (kd_prodi === "FST") {
      return "lg:bg-indigo-600 text-indigo-600";
    }
    if (kd_prodi === "SI") {
      return "lg:bg-blue-600 text-blue-600";
    }
    if (kd_prodi === "BI") {
      return "lg:bg-green-600 text-green-600";
    }
    if (kd_prodi === "TG") {
      return "lg:bg-orange-600 text-orange-600";
    }
  };

  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Mousewheel]}
      className="mySwiper"
    >
      {dtPeng &&
        dtPeng.map((row, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${colorTitle(
                row.prodi.kd_prodi
              )} lg:text-white cursor-pointer lg:ml-2 font-comic-neue group relative block text-sm font-medium focus:outline-none focus:ring`}
            >
              <span
                className={`${colorIsi(
                  row.prodi.kd_prodi
                )} lg:rounded-lg absolute inset-0 translate-x-0.5 translate-y-0.5 transition-transform group-hover:translate-y-0 group-hover:translate-x-0`}
              ></span>

              <span
                className={`${colorIsi(
                  row.prodi.kd_prodi
                )} lg:text-white h-[5.3rem] overflow-hidden lg:rounded-lg lg:border relative block border-current px-2 py-3`}
              >
                <h1 className="text-center font-bold">{row.prodi.nm_prodi}</h1>
                <p className="lg:text-white text-center">
                  {row.judul_pengumuman}
                </p>
              </span>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Pengumuman;
