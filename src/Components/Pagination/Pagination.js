import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPage } from "../../Redux/Actions/movieAction";

function PaginationComp() {
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  // Get Currant page
  const getPage = async (pageNum) => {
    dispatch(getMoviesPage(pageNum));
  };

  const handlePageClick = (data) => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    getPage(data.selected + 1);
  };

  const pageCount = 100;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}

export default PaginationComp;
