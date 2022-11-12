import { useState, useEffect } from "react";
import Card from "../components/card";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`https://unicefbackend.koompi.app/public/api/query`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <>
      <br />
      {/* <------ category section -------> */}
      <div>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
}
