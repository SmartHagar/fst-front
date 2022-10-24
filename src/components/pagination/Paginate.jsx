/** @format */

import React from "react";
import Pagination from "react-js-pagination";
const Paginate = ({ responses, setPage }) => {
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const setPaginate = () => {
    if (responses.current_page && responses.last_page > 1) {
      const { current_page, per_page, total } = responses;
      return (
        <Pagination
          innerClass="inline-flex items-center -space-x-px"
          activePage={current_page}
          itemsCountPerPage={parseInt(per_page)}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          itemClass=""
          activeClass="active"
          prevPageText="Sebelumnya"
          nextPageText="Selanjutnya"
          hideDisabled={true}
          activeLinkClass="block w-8 rounded border-blue-600 bg-blue-600 text-center text-white"
          linkClassFirst="py-2 px-3 ml-0 leading-tight text-black rounded-l-lg border border-gray-300 hover:bg-blue-400 hover:text-gray-100"
          linkClassLast="py-2 px-3 leading-tight text-black rounded-r-lg border border-gray-300 hover:bg-blue-400 hover:text-gray-100"
          linkClass="py-2 px-3 leading-tight border border-gray-300 hover:bg-blue-400 hover:text-gray-100"
          onChange={handlePageChange.bind(this)}
        />
      );
    }
  };
  return <div>{responses && setPaginate()}</div>;
};

export default Paginate;
