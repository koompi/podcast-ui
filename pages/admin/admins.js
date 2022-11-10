import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import AlertMessage from "../../components/alertMessage";
import AuthContext from "../../components/context/authContext";
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
    <div className="container mx-auto mt-12">
      {loggedIn && (
        <>
          <h1 className="text-gray-700 text-4xl mb-12 underline">All Admins</h1>
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
                    <th>No</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Action</th>
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
                              Delete
                            </button>
                            <Link href={`/admin/${res.user_id}`}>
                              <button className="bg-green-600 px-3 text-pink-100 rounded-md text-sm">
                                Edit
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
  );
};

export default Admin;
Admin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
