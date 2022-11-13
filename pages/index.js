import { useState, useEffect } from "react";
import Card from "../components/card";
import Footer from "../components/footer";

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
}
