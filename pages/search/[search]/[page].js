import React, { useEffect, useState } from "react";
import Card from "../../../components/card";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useTheme } from "next-themes";

const Search = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme("");
  const [count, setCount] = useState();
  // const [search, setSearch] = useState("កង្កែប");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    fetch(
      `https://unicefbackend.koompi.app/public/api/search?search_string=${search}&result_limit=10&page_number=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(false);
        setItem(data.data);
        setCount(data.page_count);
      })
      .then(() => {
        setLoading(true);
      });
  }, [page, search]);
  const fetchData = async (currenPage) => {
    const { data } = await axios.get(
      `https://unicefbackend.koompi.app/public/api/search?search_string=កង្កែប&result_limit=10&page_number=${currenPage}`
    );
    return data.data;
  };
  const handlePageClick = async ({ selected: selected }) => {
    let currenPage = selected + 1;
    const dataFromServer = await fetchData(currenPage);
    setItem(dataFromServer);
  };
  return (
    <div>
      <div className="p-2 md:p-12">
        <br />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-4 gap-2">
          {loading === false || !item || item === undefined ? (
            "loading..."
          ) : (
            <>
              {Object.keys(item).length === 0 ? (
                <h1 className="font-bold text-xl text-center">រកមិនឃេីញ</h1>
              ) : (
                <>
                  {item.map((items, i) => (
                    <Card
                      key={i}
                      gradeName={items.category_display_name}
                      title={items.display_name}
                      thumbnail={items.thumbnail}
                      grade={items.grade}
                      subject={items.subject}
                      fileType={items.file_type}
                      location={items.location}
                      gradeKh={items.grade_kh}
                      subjectKh={items.subject_kh}
                      thumbnailName={items.thumbnail.thumbnail_name}
                      id={items.file_id}
                      filename={items.filename}
                    />
                  ))}
                </>
              )}
            </>
          )}
        </div>
        {Object.keys(item).length === 0 ? (
          <></>
        ) : (
          <div
            style={{
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "center",
              // width: "100%",
              padding: 20,
              boxSizing: "border-box",
              height: "100%",
              float: "right",
            }}
          >
            {theme === "default" ? (
              <ReactPaginate
                activeClassName={"item-white active"}
                breakClassName={"item-white break-me "}
                breakLabel={"..."}
                containerClassName={"pagination-white"}
                // containerClassName={
                //   "flex items-center flex-row h-30 justify-center relative w-[600px] rounded-md"
                // }
                disabledClassName={"disabled-page"}
                marginPagesDisplayed={2}
                nextClassName={"item-white next "}
                onPageChange={handlePageClick}
                pageCount={count}
                pageClassName={"item-white pagination-page "}
                pageRangeDisplayed={2}
                previousClassName={"item-white previous"}
              />
            ) : (
              <ReactPaginate
                activeClassName={"item active"}
                breakClassName={"item break-me "}
                breakLabel={"..."}
                containerClassName={"pagination"}
                // containerClassName={
                //   "flex items-center flex-row h-30 justify-center relative w-[600px] rounded-md"
                // }
                disabledClassName={"disabled-page"}
                marginPagesDisplayed={2}
                nextClassName={"item next "}
                onPageChange={handlePageClick}
                pageCount={count}
                pageClassName={"item pagination-page "}
                pageRangeDisplayed={2}
                previousClassName={"item previous"}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
