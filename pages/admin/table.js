import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../pages/context/authContext";

const Table = () => {
  const { loggedIn } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://unicef.koompi.app/public/api/query`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, []);
  console.log(item);
  return (
    <div className="container mx-auto mt-12">
      {loggedIn && (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Grade</th>
                <th>Title</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {item.map((res, index) => {
                return (
                  <>
                    <tr>
                      <th>{index + 1}</th>
                      <td>{res.grade_kh}</td>
                      <td>{res.display_name}</td>
                      <td>{res.subject_kh}</td>
                      <td>Delete</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
