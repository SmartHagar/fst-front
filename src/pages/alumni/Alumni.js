/** @format */

import React, { useEffect } from "react";

const Alumni = () => {
  useEffect(() => {
    // redirect to https://alumni.fstuogp.com
    window.location.replace("https://alumni.fstuogp.com");
  });
  return (
    <div className="flex justify-center items-center mx-2 md:mx-10 min-h-[83vh]">
      <div className="">Mengalihkan ke halaman website alumni</div>
    </div>
  );
};

export default Alumni;
