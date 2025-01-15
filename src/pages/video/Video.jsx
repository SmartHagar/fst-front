/** @format */

import React, { useEffect, useState } from "react";
import useUrl from "../../services/base_url";
import useVideo from "../../stores/video";
import { motion } from "framer-motion";

import { HiArrowSmLeft, HiArrowSmRight, HiOutlineX } from "react-icons/hi";

import "./style.css";
import Paginate from "../../components/pagination/Paginate";
import ImgLoading from "../../components/loading/ImgLoading";
import ReactPlayer from "react-player";
import YouTubeThumbnail from "./YoutubeThumb";

const Video = () => {
  const { setVideo, dataVideo } = useVideo();

  const [model, setModel] = useState(false);
  const [tmpImg, setTmpImg] = useState(null);
  const [index, setIndex] = useState();
  const [list, setList] = useState(null);

  // paginate
  const [page, setPage] = useState(1);

  const getImg = (video) => {
    setTmpImg(video);
    setModel(true);
  };

  const prevPicture = () => {
    setIndex(index - 1);
  };
  const nextPicture = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    const fetch = async (page) => {
      const data = await setVideo(page);
      setList(data.data.data);
    };

    fetch(page);
  }, [page, setVideo]);

  const showVideo = () => {
    return (
      <div>
        {/* card */}
        <div className="flex flex-wrap -m-1 md:-m-2 justify-center">
          {list &&
            list.map((row, index) => (
              <div
                key={index}
                className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <div
                  className="w-full p-1 md:p-2 overflow-hidden cursor-pointer"
                  onClick={() => getImg(list, setIndex(index))}
                >
                  {/* <ReactPlayer
                    controls
                    title={dataVideo[0].judul}
                    alt="gallery"
                    url={row.url}
                    
                  /> */}
                  <YouTubeThumbnail videoUrl={row.url} />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10">
      <div className="w-full font-arvo text-sm  min-h-[83vh]">
        <h2 className="mb-5 mt-2 font-bold text-lg sm:text-2xl text-center">
          Video Fakultas Sains & Teknologi
        </h2>
        <div>
          <div className="flex flex-wrap justify-center">
            <div className={model ? "model open" : "model"}>
              {tmpImg && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={index}
                  transition={{ duration: 1 }}
                >
                  <div className="h-144">
                    <ReactPlayer
                      className="w-4/6 m-auto"
                      url={`${tmpImg[index].url}`}
                      alt=""
                      controls
                    />
                    <div className="bg-white/[0.6] py-2 font-cabin absolute left-0 bottom-3 w-full">
                      <h4 className="text-center">{tmpImg[index].judul}</h4>
                    </div>
                  </div>
                  <div id="close">
                    <HiOutlineX onClick={() => setModel(false)} />
                  </div>
                  {index > 0 && (
                    <div id="fill-left">
                      <HiArrowSmLeft onClick={prevPicture} />
                    </div>
                  )}

                  {index + 1 < tmpImg.length && (
                    <div id="fill-right">
                      <HiArrowSmRight onClick={nextPicture} />
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {list ? showVideo() : <ImgLoading />}
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="mt-4 mx-auto">
        <Paginate responses={dataVideo} setPage={setPage} />
      </div>
    </div>
  );
};

export default Video;
