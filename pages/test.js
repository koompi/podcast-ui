import React, { useEffect, useState } from "react";
import Card from "../components/card";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import axios from "axios";
const Search = () => {
  const [item, setItem] = useState([]);
  const [fetchDatas, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState();
  // const [search, setSearch] = useState("កង្កែប");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { search } = router.query;
  console.log(item);
  useEffect(() => {
    fetch(
      `https://unicefbackend.koompi.app/public/api/search?search_string=កង្កែប&result_limit=5&page_number=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setItem(data.data);
        setCount(data.page_count);
        setLoading(true);
      });
  }, [page]);

  const fetchData = async (currenPage) => {
    // const { data } = fetch(
    //   `https://unicefbackend.koompi.app/public/api/search?search_string=កង្កែប&result_limit=5&page_number=${currenPage}`
    // );
    // return data;
    const { data } = await axios.get(
      `https://unicefbackend.koompi.app/public/api/search?search_string=កង្កែប&result_limit=5&page_number=${currenPage}`
    );
    return data.data;
  };
  const handlePageClick = async ({ selected: selected }) => {
    let currenPage = selected + 1;
    const dataFromServer = await fetchData(currenPage);
    console.log(currenPage, "currentPage");
    setItem(dataFromServer);
  };

  // function Items({ currentItems }) {
  //   return (
  //     <div className="items">
  //       {currentItems &&
  //         currentItems.map((item, i) => (
  //           // eslint-disable-next-line react/jsx-key
  //           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-4 gap-2">
  //             {loading === false || !item || item === undefined ? (
  //               "loading..."
  //             ) : (
  //               <Card
  //                 key={i}
  //                 gradeName={item.category_display_name}
  //                 title={item.display_name}
  //                 thumbnail={item.thumbnail}
  //                 grade={item.grade}
  //                 subject={item.subject}
  //                 fileType={item.file_type}
  //                 location={item.location}
  //                 gradeKh={item.grade_kh}
  //                 subjectKh={item.subject_kh}
  //                 thumbnailName={item.thumbnail.thumbnail_name}
  //                 id={item.file_id}
  //                 filename={item.filename}
  //               />
  //             )}
  //           </div>
  //         ))}
  //     </div>
  //   );
  // }
  // function PaginatedItems() {

  //   const [currentItems, setCurrentItems] = useState([]);

  //   const [itemOffset, setItemOffset] = useState(0);

  //   useEffect(() => {
  //     // Fetch items from another resources.
  //     const endOffset = itemOffset + 5;
  //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //     // setCurrentItems(item.slice(itemOffset, endOffset));
  //     setCurrentItems(item);
  //     // setPageCount(Math.ceil(item.length / itemsPerPage));
  //     // setPageCount(count);
  //     console.log(count, "imte");
  //   }, [itemOffset]);

  //   // Invoke when user click to request another page.
  //   const handlePageClick = (event) => {
  //     const newOffset = (event.selected * 5) % item.length;
  //     // const newOffset = setPage(event.selected);
  //     console.log(
  //       `User requested page number ${event.selected}, which is offset ${newOffset}`
  //     );
  //     setItemOffset(newOffset);
  //   };
  //   // function handlePageClick({ selected: selectedPage }) {
  //   //   setPage(selectedPage);
  //   // }
  //   return (
  //     <>
  //       <Items currentItems={currentItems} />
  //       <ReactPaginate
  //         nextLabel="next >"
  //         onPageChange={handlePageClick}
  //         pageRangeDisplayed={3}
  //         marginPagesDisplayed={2}
  //         pageCount={count}
  //         previousLabel="< previous"
  //         pageClassName="page-item"
  //         pageLinkClassName="page-link"
  //         previousClassName="page-item"
  //         previousLinkClassName="page-link"
  //         nextClassName="page-item"
  //         nextLinkClassName="page-link"
  //         breakLabel="..."
  //         breakClassName="page-item"
  //         breakLinkClassName="page-link"
  //         containerClassName="pagination"
  //         activeClassName="active"
  //         renderOnZeroPageCount={null}
  //       />
  //     </>
  //   );
  // }
  return (
    <div>
      <div className="p-2 md:p-12">
        <br />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-4 gap-2">
          {item.map((item, i) => {
            return (
              <Card
                key={i}
                gradeName={item.category_display_name}
                title={item.display_name}
                thumbnail={item.thumbnail}
                grade={item.grade}
                subject={item.subject}
                fileType={item.file_type}
                location={item.location}
                gradeKh={item.grade_kh}
                subjectKh={item.subject_kh}
                thumbnailName={item.thumbnail.thumbnail_name}
                id={item.file_id}
                filename={item.filename}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 20,

            boxSizing: "border-box",
            width: "100%",
            height: "100%",
          }}
        >
          <ReactPaginate
            activeClassName={"item active "}
            breakClassName={"item break-me "}
            breakLabel={"..."}
            containerClassName={"pagination"}
            disabledClassName={"disabled-page"}
            marginPagesDisplayed={2}
            nextClassName={"item next "}
            // nextLabel={<ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />}
            onPageChange={handlePageClick}
            pageCount={count}
            pageClassName={"item pagination-page "}
            pageRangeDisplayed={2}
            previousClassName={"item previous"}
            // previousLabel={<ArrowBackIosIcon style={{ fontSize: 18, width: 150 }} />}
            // pageCount={count}
            // marginPagesDisplayed={2}
            // pageRangeDisplayed={3}
            // onPageChange={handlePageClick}
            // containerClassName={"pagination justify-content-center"}
            // pageClassName={"page-item"}
            // pageLinkClassName={"page-link"}
            // previousClassName={"page-item"}
            // previousLinkClassName={"page-link"}
            // nextClassName={"page-item"}
            // nextLinkClassName={"page-link"}
            // breakClassName={"page-item"}
            // breakLinkClassName={"page-link"}
            // activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

// import React, { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";

// // const items = [...Array(33).keys()];
// const PER_PAGE = 3;
// const Test = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageCounts, setPagecount] = useState();
//   const [loading, setLoading] = useState(false);
//   const [item, setItem] = useState([]);
//   useEffect(() => {
//     fetch(
//       `https://unicefbackend.koompi.app/public/api/search?search_string=កង្កែប&result_limit=5&page_number=${currentPage}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setLoading(false);
//         setItem(data.data);
//         setPagecount(data.page_count);
//         setLoading(true);
//       });
//   }, [currentPage, pageCounts]);
//   console.log(item);
// function handlePageClick({ selected: selectedPage }) {
//   setCurrentPage(selectedPage);
// }
//   const offset = currentPage * PER_PAGE;

//   const currentPageData = item
//     // .slice(offset, offset + PER_PAGE)
//     // eslint-disable-next-line react/jsx-key
//     .map((res) => <h1>{res.display_name}</h1>);

//   // const pageCount = parseInt(pageCounts);

//   return (
//     <div style={{ marginTop: "50px" }}>
//       <h1>React Paginate Example</h1>
//       <ReactPaginate
//         previousLabel={"← Previous"}
//         nextLabel={"Next →"}
//         pageCount={pageCounts}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination"}
//         previousLinkClassName={"pagination__link"}
//         nextLinkClassName={"pagination__link"}
//         disabledClassName={"pagination__link--disabled"}
//         activeClassName={"pagination__link--active"}
//       />
//       {currentPageData}
//     </div>
//   );
// };

// export default Test;
