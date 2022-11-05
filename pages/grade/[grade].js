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
  //     .get(`https://unicef.koompi.app/public/api/query/${grade}`)
  //     .then((data) => {
  //       setLoading(true);
  //       setItem(data.data);
  //       // setLoading(false);
  //     });
  // }, [grade]);
  useEffect(() => {
    setLoading(true);
    fetch(`https://unicef.koompi.app/public/api/query/${grade}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [grade]);

  return (
    <div className="container mx-auto">
      <br />
      {loading ? (
        "laoding..."
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {item.map((items, i) => (
            <Card
              key={i}
              title={items.display_name}
              thumbnail={items.thumbnail}
              grade={items.grade}
              subject={items.subject}
              fileType={items.file_type}
              location={items.location}
              subjectKh={items.subject_kh}
              thumbnailName={items.thumbnail.thumbnail_name}
              gradeKh={items.grade_kh}
              id={items.file_id}
            />
          ))}
        </div>
      )}

      <br />
    </div>
  );
};

export default Index;
