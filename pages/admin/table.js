import React, { useContext, useState, useEffect } from "react";
import AlertMessage from "../../components/alertMessage";
import AuthContext from "../../components/context/authContext";
import { useRouter } from "next/router";
import Notfound from "../404";
import Navbar from "../../components/navbar";
import AdminSidebar from "../../components/adminSidebar";
import Footer from "../../components/footer";

const Table = () => {
  const router = useRouter();
  const { loggedIn, decode } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hideMessage, setHideMessage] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://unicefbackend.koompi.app/public/api/query`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [message, loggedIn, hideMessage]);

  const DeleteHandler = (file_id) => {
    try {
      fetch(`https://unicefbackend.koompi.app/private/api/delete/${file_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${loggedIn}`,
        },
      }).then((res) => {
        setMessage("Delete Successfully");
        setLoading(true);
        setHideMessage(true);
        setTimeout(() => {
          setHideMessage(false);
        }, 3000);
        setLoading(false);
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 h-screen p-7 container mx-auto mt-12">
          {loggedIn && (
            <>
              <h1 className="mt-12 text-4xl mb-12 underline">មាតិកា ទាំងអស់</h1>
              {hideMessage ? (
                <AlertMessage
                  message={message}
                  bg="alert alert-success"
                  text="text-green-900"
                />
              ) : (
                ""
              )}
            </>
          )}

          {loading ? (
            "loading..."
          ) : (
            <>
              {loggedIn && (
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full ">
                    <thead>
                      <tr>
                        <th>លេខរៀង</th>
                        <th>ថ្នាក់</th>
                        <th>ចំណងជេីង</th>
                        <th>មុខវិជ្ជា</th>
                        <th>សកម្មភាព</th>
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
                              <td>
                                <button
                                  className="bg-red-600 px-3 text-pink-100 rounded-md text-sm"
                                  onClick={() => DeleteHandler(res.file_id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
              {!loggedIn && (
                <div>
                  <Notfound />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Table;
Table.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
