/** @format */

import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { HiSpeakerphone, HiNewspaper } from "react-icons/hi";
import Carousel from "../../components/carousel/Images";
import Pengumuman from "../../components/carousel/Pengumuman";
import { DashbordContext } from "../../context/dashboard";
import useBerita from "../../stores/berita";
import usePengumuman from "../../stores/pengumuman";
import useSlide from "../../stores/Slide";

const Dashboard = () => {
  const { setSlide, dataSlide } = useSlide();
  const { setPengumuman, dataPengumuman } = usePengumuman();
  const { setBerita, dataBerita } = useBerita();

  useEffect(() => {
    setSlide();
    setPengumuman();
    setBerita();
  }, []);

  return (
    <div>
      <DashbordContext.Provider value={{ dataSlide, dataPengumuman }}>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 lg:row-span-2">
          <div className="lg:row-span-2 lg:h-[36rem] h-20 lg:mt-2 lg:order-1 order-2">
            <Pengumuman />
          </div>
          <div className="lg:col-span-3 -z-50 lg:order-2 order-1">
            <Carousel />
          </div>
          <div className="lg:col-span-3 lg:order-3 mt-4 order-3">
            <div className="flex gap-10 justify-center flex-wrap">
              {/* pengumuman */}
              <div className="lg:w-1/3 lg:order-1 w-full order-2">
                <Card className="w-full mt-5 mx-auto">
                  <CardHeader
                    color="light-blue"
                    className="relative h-12 flex justify-center items-center gap-2"
                  >
                    <HiSpeakerphone />
                    <div className="font-comic-neue italic font-bold">
                      Kumpulan Pengumuman
                    </div>
                  </CardHeader>
                  <CardBody className="font-comic-neue mt-[-4px] pl-10">
                    <ul>
                      <li className="text-indigo-800 hover:underline cursor-pointer mb-2">
                        Fakultas
                      </li>
                      <li className="text-blue-800 hover:underline cursor-pointer mb-2">
                        Sistem Informasi
                      </li>
                      <li className="text-green-800 hover:underline cursor-pointer mb-2">
                        Biologi
                      </li>
                      <li className="text-orange-800 hover:underline cursor-pointer">
                        Teknik Geologi
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </div>
              {/* berita */}
              <div className="lg:w-6/12 lg:order-2 w-full order-1">
                <Card className="w-full mt-5 mx-auto">
                  <CardHeader
                    color="light-blue"
                    className="relative h-12 flex justify-center items-center gap-2"
                  >
                    <HiNewspaper />
                    <div className="font-comic-neue italic font-bold">
                      Berita
                    </div>
                  </CardHeader>
                  <CardBody className="font-comic-neue mt-[-4px] overflow-auto h-52">
                    <ul className="list-disc">
                      {dataBerita.data &&
                        dataBerita.data.map((row) => (
                          <li
                            key={row.id}
                            className="hover:text-blue-900 cursor-pointer"
                          >
                            {row.judul.substring(0, 70)}
                            {row.judul.length > 70 ? "......" : ""}
                          </li>
                        ))}
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </DashbordContext.Provider>
    </div>
  );
};

export default Dashboard;
