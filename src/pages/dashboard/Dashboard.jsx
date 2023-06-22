/** @format */

import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { HiSpeakerphone, HiNewspaper } from "react-icons/hi";
import Carousel from "../../components/carousel/Images";
import Pengumuman from "../../components/carousel/Pengumuman";
import ImgLoading from "../../components/loading/ImgLoading";
import { DashbordContext } from "../../context/dashboard";
import useBerita from "../../stores/berita";
import usePengumuman from "../../stores/pengumuman";
import useSlide from "../../stores/Slide";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useUrl from "../../services/base_url";
import PengumumanModal from "../../components/modals/PengumumanModal";
import useVideo from "../../stores/video";
import Benner from "../../components/carousel/Benner";

const Dashboard = () => {
  const { BASE_URL } = useUrl();

  const { setSlide, dataSlide } = useSlide();
  const { setPengumuman, dataPengumuman } = usePengumuman();
  const { setBerita, dataBerita } = useBerita();
  const { setVideoUtama, dataVideo } = useVideo();

  useEffect(() => {
    setSlide();
    setPengumuman();
    setBerita();
    setVideoUtama();
  }, [setSlide, setPengumuman, setBerita, setVideoUtama]);

  const [open, setOpen] = useState(false);
  const [row, setRow] = useState({});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <DashbordContext.Provider
        value={{ dataSlide, dataPengumuman, setOpen, open, setRow, row }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 lg:row-span-2">
          {dataSlide.length > 0 ? (
            <>
              <div className="lg:row-span-2 lg:h-[36rem] h-20 lg:mt-2 lg:order-1 order-2">
                <Pengumuman />
              </div>
              <div className="lg:col-span-3 lg:order-2 order-1">
                <Carousel />
              </div>
            </>
          ) : (
            <div className="lg:col-span-3">
              <ImgLoading />
            </div>
          )}

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
                      <Link to="/pengumuman/4">
                        <li className="text-indigo-800 hover:underline cursor-pointer mb-2">
                          Fakultas
                        </li>
                      </Link>
                      <Link to="/pengumuman/1">
                        <li className="text-blue-800 hover:underline cursor-pointer mb-2">
                          Sistem Informasi
                        </li>
                      </Link>
                      <Link to="/pengumuman/3">
                        <li className="text-green-800 hover:underline cursor-pointer mb-2">
                          Biologi
                        </li>
                      </Link>
                      <Link to="/pengumuman/2">
                        <li className="text-orange-800 hover:underline cursor-pointer">
                          Teknik Geologi
                        </li>
                      </Link>
                    </ul>
                  </CardBody>
                </Card>
                {/* Opan Modal */}
                <PengumumanModal />
              </div>
              {/* Video */}
              <div className="lg:w-6/12 lg:order-2 w-full order-1">
                <Card className="w-full mt-5 mx-auto">
                  <CardHeader
                    color="light-blue"
                    className="relative h-12 flex justify-center items-center gap-2"
                  >
                    <HiNewspaper />
                    <div className="font-comic-neue italic font-bold">
                      Video
                    </div>
                  </CardHeader>
                  <CardBody className="font-comic-neue mx-[-4px] h-72 w-full">
                    {dataVideo.length > 0 ? (
                      <>
                        <iframe
                          width="100%"
                          height="100%"
                          src={dataVideo[0].url}
                          title={dataVideo[0].judul}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </>
                    ) : (
                      <>
                        <h1 className="text-xl">Tidak Ada Video</h1>
                      </>
                    )}
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* berita */}
        <div className="lg:container mx-auto w-full mt-10">
          <Card className="w-full mt-5 mx-auto">
            <CardHeader
              color="light-blue"
              className="relative h-12 flex justify-center items-center gap-2"
            >
              <HiNewspaper />
              <div className="font-comic-neue italic font-bold">
                Berita Terbaru
              </div>
            </CardHeader>
            <CardBody className="font-comic-neue mt-[-4px]">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {dataBerita.data &&
                  dataBerita.data.map((row) => {
                    return (
                      <Link
                        key={row.id}
                        to={`/berita/detail/fst-${row.id}/${row.tag}`}
                        className="group relative block bg-black h-80 overflow-hidden"
                      >
                        <img
                          alt="Developer"
                          src={`${BASE_URL}/storage/${row.gambar_berita}`}
                          className="absolute inset-0 h-full w-full object-cover opacity-75 transition ease-in-out delay-150 group-hover:opacity-50 group-hover:scale-125"
                        />

                        <div className="relative p-8">
                          <p className="text-xl font-bold text-white">
                            {row.judul.substring(0, 200)}
                            {row.judul.length > 150 ? "......" : ""}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
              </div>

              {/* <Link key={row.id} to="/berita/detail" state={{ row, BASE_URL }}>
                <li className="hover:text-blue-900 cursor-pointer">
                  
                </li>
              </Link> */}
            </CardBody>
          </Card>
        </div>
      </DashbordContext.Provider>
    </motion.div>
  );
};

export default Dashboard;
