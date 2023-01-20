import React, { useEffect, useState } from "react";
import Card from "../../../components/card";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import PaginatedItems from "../../test";
const Search = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [search, setSearch] = useState("កង្កែប");
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { search } = router.query;
  // console.log(page, search);
  useEffect(() => {
    fetch(
      `https://unicefbackend.koompi.app/public/api/search?search_string=${search}&result_limit=5&page_number=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(false);
        setItem(data);
      })
      .then(() => {
        setLoading(true);
      });
  }, [page, search]);

  return (
    <div>
      <div className="p-2 md:p-12">
        <br />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-4 gap-2">
          {loading === false || !item || item === undefined ? (
            "loading..."
          ) : (
            <>
              {item.data.map((items, i) => (
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
        </div>
      </div>
    </div>
  );
};

export default Search;
