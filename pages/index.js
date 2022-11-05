import { useState, useEffect } from "react";
import Card from "../components/card";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get("https://unicef.koompi.app/public/api/query").then((res) => {
      setItem(res.data);
      setLoading(true);
    });
  }, []);
  return (
    <>
      <br />
      {/* <------ category section -------> */}
      <div className="container mx-auto">
        {/* <div className="flex space-x-4">
          <div className="bg-gray-300 p-3 rounded-xl font-medium text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-blue-200">
            Pop Music
          </div>
          <div className="bg-gray-300 p-3 rounded-xl font-medium text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-blue-200">
            Romantic
          </div>
          <div className="bg-gray-300 p-3 rounded-xl font-medium text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-blue-200">
            Rock
          </div>
          <div className="bg-gray-300 p-3 rounded-xl font-medium text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-blue-200">
            Sad
          </div>
        </div> */}
        <br />
        <div className="grid grid-cols-5 gap-4">
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
