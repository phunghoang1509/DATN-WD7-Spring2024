import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const CustomPagination = ({ resPerPage, productsFiltersCount }) => {
  const [currentPage, setCurrentPage] = useState();

  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);

    if (searchParams.has("page")) {
      searchParams.set("page", pageNumber);
    } else {
      searchParams.append("page", pageNumber);
    }

    const path = window.location.pathname + "?" + searchParams.toString();
    navigate(path);
  };
  // console.log(resPerPage, productsFiltersCount);
  return (
    <div className="d-flex justify-content-center my-5">
      {productsFiltersCount > resPerPage && (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={productsFiltersCount}
          onChange={setCurrentPageNo}
          nextPageText={"Tiếp theo"}
          prevPageText={"Trước đó"}
          firstPageText={"Đầu trang"}
          lastPageText={"Cuối trang"}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
};

export default CustomPagination;