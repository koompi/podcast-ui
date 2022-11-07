import React, { useContext, useState, useEffect } from "react";
import AlertMessage from "../../components/alertMessage";
import AuthContext from "../../pages/context/authContext";

const Admin = () => {
  const { loggedIn } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hideMessage, setHideMessage] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://unicef.koompi.app/private/api/admin/query`, {
      headers: {
        Authorization: `Bearer ${loggedIn}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, []);

  const DeleteHandler = (file_id) => {
    // console.log(file_id);
    try {
      fetch(`https://unicef.koompi.app/private/api/delete/${file_id}`, {
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
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-gray-700 text-4xl mb-12 underline">All Admins</h1>
      {hideMessage ? <AlertMessage message={message} /> : ""}
      {loading ? (
        "loading..."
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
