/** @format */

import React, { useContext } from "react";
import { SearchDataContext } from "../../context/SearchDataContext";

const HeadSearch = ({ placeholder = "Cari data..." }) => {
  const { setSearchData } = useContext(SearchDataContext);
  return (
    <input
      onChange={(e) => setSearchData(e.target.value)}
      placeholder={placeholder}
      type="text"
      className="bg-bg-main w-full h-12 rounded-xl px-[16px] py-0 focus:outline-none border border-primary focus:border focus:border-blue-900"
    />
  );
};

export default HeadSearch;
