/** @format */

import React, { useEffect } from "react";
import useUrl from "../../services/base_url";
import useBenner from "../../stores/benner";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Benner = () => {
  const { BASE_URL } = useUrl();
  const { setBenner, dataBenner } = useBenner();
  useEffect(() => {
    setBenner();
    return () => {};
  }, []);
  const modules = [];
  if (dataBenner.length > 1) {
    modules.push(Autoplay, Pagination);
  }

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={modules}
      lazy={true}
      className="mySwiper"
    >
      {console.log("banner", dataBenner)}
      {dataBenner &&
        dataBenner.map((row, index) => (
          <SwiperSlide key={index}>
            <div className="h-32 overflow-hidden lg:h-80 md:h-52 cursor-grab z-50">
              <img
                src={`${BASE_URL}/storage/${row.gambar}`}
                className="object-fill h-32 w-full lg:h-80 md:h-52"
                alt=""
              />
              <div className="absolute top-0">
                <div className="mt-2 mx-2 font-comic-neue bg-white/[.5] py-2 px-4 rounded-lg">
                  <p>{row.link}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Benner;
