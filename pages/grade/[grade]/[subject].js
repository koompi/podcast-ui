import React, { useEffect, useState } from "react";
import Card from "../../../components/card";
import { useRouter } from "next/router";
import axios from "axios";

const Subject = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { grade, subject } = router.query;

  // useEffect(() => {
  //   axios
  //     .get(`https://unicef.koompi.app/public/api/query/${grade}/${subject}`)
  //     .then((res) => {
  //       setItem(res.data);
  //     });
  // }, [grade, subject]);
  useEffect(() => {
    setLoading(true);
    fetch(`https://unicef.koompi.app/public/api/query/${grade}/${subject}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [grade, subject]);

  return (
    <div className="container mx-auto">
      <br />
      <br />
      <div className="grid grid-cols-5 gap-4">
        {loading ? (
          "loading..."
        ) : (
          <>
            {item.map((items, i) => (
              <Card
                key={i}
                title={items.display_name}
                thumbnail={items.thumbnail}
                grade={items.grade}
                subject={items.subject}
                fileType={items.file_type}
                location={items.location}
                thumbnailName={items.thumbnail.thumbnail_name}
                subjectKh={items.subject_kh}
                gradeKh={items.grade_kh}
                id={items.file_id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Subject;
