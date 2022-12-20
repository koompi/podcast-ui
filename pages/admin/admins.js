import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import AdminSidebar from "../../components/adminSidebar";
import AlertMessage from "../../components/alertMessage";
import AuthContext from "../../components/context/authContext";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Notfound from "../404";

const Admin = () => {
  const { loggedIn } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hideMessage, setHideMessage] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://unicefbackend.koompi.app/private/api/admin/query`, {
      headers: {
        Authorization: `Bearer ${loggedIn}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [message, hideMessage, loggedIn]);

  const DeleteHandler = (user_id) => {
    try {
      fetch(
        `https://unicefbackend.koompi.app/private/api/admin/delete/${user_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${loggedIn}`,
          },
        }
      ).then((res) => {
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
    <div>
      <Navbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 h-screen p-7 container mx-auto mt-12">
          <div className="container mx-auto">
            {loggedIn && (
              <>
                <h1 className=" text-4xl mt-12 mb-12 underline">
                  អ្នកគ្រប់គ្រង ទាំងអស់
                </h1>
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
              <Notfound />
            ) : (
              <>
                {loggedIn && (
                  <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                      <thead>
                        <tr>
                          <th>លេខរៀង</th>
                          <th>ឈ្មោះ</th>
                          <th>ឈ្មោះអ្នកប្រប្រាស់</th>
                          <th>មុខងារ រដ្ឋបាល/Root</th>
                          <th>សកម្មភាព</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.map((res, index) => {
                          return (
                            <>
                              <tr>
                                <th>{index + 1}</th>
                                <td>{res.display_name}</td>
                                <td>{res.username}</td>
                                <td>{res.role}</td>
                                <td className="space-x-2">
                                  <button
                                    className="bg-red-600 px-3 text-pink-100 rounded-md text-sm"
                                    onClick={() => DeleteHandler(res.user_id)}
                                  >
                                    លុប
                                  </button>
                                  <Link href={`/admin/${res.user_id}`}>
                                    <button className="bg-green-600 px-3 text-pink-100 rounded-md text-sm">
                                      កែ
                                    </button>
                                  </Link>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
                {!loggedIn && <div>notig</div>}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
Admin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
