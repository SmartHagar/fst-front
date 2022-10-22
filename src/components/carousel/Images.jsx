/** @format */

import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { DashbordContext } from "../../context/dashboard";
import useUrl from "../../services/base_url";

const Images = () => {
  const { BASE_URL } = useUrl();
  const { dataSlide } = useContext(DashbordContext);
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, Lazy]}
      lazy={true}
      className="mySwiper"
    >
      {dataSlide &&
        dataSlide.map((row, index) => (
          <SwiperSlide key={index}>
            <div className="lg:h-96 h-48 overflow-hidden">
              <img
                src={`${BASE_URL}/storage/${row.path_gambar}`}
                className="object-cover lg:h-96 h-48 w-full"
                alt=""
              />
              <div className="absolute top-0">
                <div className="mt-2 mx-2 font-comic-neue bg-white/[.5] py-2 px-4 rounded-lg">
                  <p>{row.kegiatan_det.kegiatan.nm_kegiatan}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Images;
