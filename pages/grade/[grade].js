import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import { useRouter } from "next/router";
import axios from "axios";

const Index = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { grade } = router.query;

  // useEffect(() => {
  //   axios
  //     .get(`https://unicefbackend.koompi.app/public/api/query/${grade}`)
  //     .then((data) => {
  //       setLoading(true);
  //       setItem(data.data);
  //       // setLoading(false);
  //     });
  // }, [grade]);
  useEffect(() => {
    setLoading(true);
    fetch(`https://unicefbackend.koompi.app/public/api/query/${grade}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [grade]);

  return (
    // <div className="container mx-auto">
    //   <br />
    //   {loading ? (
    //     "laoding..."
    //   ) : (
    //     <div className="grid grid-cols-5 gap-4">
    //       {item.map((items, i) => (
    //         <Card
    //           key={i}
    //           title={items.display_name}
    //           thumbnail={items.thumbnail}
    //           grade={items.grade}
    //           subject={items.subject}
    //           fileType={items.file_type}
    //           location={items.location}
    //           subjectKh={items.subject_kh}
    //           thumbnailName={items.thumbnail.thumbnail_name}
    //           gradeKh={items.grade_kh}
    //           id={items.file_id}
    //         />
    //       ))}
    //     </div>
    //   )}

    //   <br />
    // </div>
    <>
      <br />
      {/* <------ category section -------> */}
      <div className="p-2 md:p-12">
        <br />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 md:gap-4 gap-2">
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
