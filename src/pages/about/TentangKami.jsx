/** @format */

import React from "react";
import { motion } from "framer-motion";

const TentangKami = () => {
  return (
    <div className="flex flex-wrap justify-between mx-2 md:mx-10">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="w-full font-arvo text-sm min-h-[83vh]"
      >
        <h2 className="mb-5 mt-2 font-bold text-lg sm:text-2xl">
          Fakultas Sains & Teknologi
        </h2>
        <iframe
          class="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.3555787347723!2d140.67009173422562!3d-2.59471227925858!2m3!1f332.6612903225808!2f28.558834225175328!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x686cf5fab51e5e33%3A0x5bbfb6ec998abf1e!2sFakultas%20Sains%20UOG%20Kotaraja!5e1!3m2!1sen!2sid!4v1616280206075!5m2!1sen!2sid"
          height="500"
          allowfullscreen=""
          title="peta-fst"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default TentangKami;
