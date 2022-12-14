/** @format */

import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Mousewheel, Pagination, EffectCube } from "swiper";
import { DashbordContext } from "../../context/dashboard";
import useUrl from "../../services/base_url";
import "swiper/css/effect-cube";

const Images = () => {
  const { BASE_URL } = useUrl();
  const { dataSlide } = useContext(DashbordContext);
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={"cube"}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[Autoplay, Pagination, Mousewheel, EffectCube]}
      lazy={true}
      className="mySwiper"
    >
      {dataSlide &&
        dataSlide.map((row, index) => (
          <SwiperSlide key={index}>
            <div className="h-48 overflow-hidden lg:h-96 md:h-80 cursor-grab">
              <img
                src={`${BASE_URL}/storage/${row.path_gambar}`}
                className="object-cover h-48 w-full lg:h-96 md:h-80"
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
