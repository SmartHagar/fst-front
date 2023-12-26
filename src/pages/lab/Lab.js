/** @format */

import React, { useEffect } from "react";

const Lab = () => {
  useEffect(() => {
    // redirect to https://lab.fstuogp.com
    window.location.replace("https://lab.fstuogp.com");
  });
  return (
    <div className="flex justify-center items-center mx-2 md:mx-10 min-h-[83vh]">
      <div className="">Mengalihkan ke halaman website lab</div>
    </div>
  );
};

export default Lab;
