import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../components/context/authContext";
import AlertMessage from "../../components/alertMessage";
import { useRouter } from "next/router";
import Notfound from "../404";
import Navbar from "../../components/navbar";
import AdminSidebar from "../../components/adminSidebar";
import Footer from "../../components/footer";

const Editamdin = () => {
  const router = useRouter();
  const { editAdmin } = router.query;
  const { loggedIn } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  const [value, setValue] = useState({
    display_name: "",
    username: "",
    password: "",
    role: "",
  });

  const { display_name, username, password, role } = value;
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://unicefbackend.koompi.app/private/api/admin/query/${editAdmin}`,
      {
        headers: {
          Authorization: `Bearer ${loggedIn}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, [editAdmin, loggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        `https://unicefbackend.koompi.app/private/api/admin/edit/${editAdmin}`,
        {
          method: "PUT",
          body: JSON.stringify({
            ...value,
            display_name:
              display_name === "" ? item.display_name : display_name,
            username: username === "" ? item.username : username,
            password: password === "" ? item.password : password,
            role: role === "Admin" ? "Admin" : role === "Root" ? "Root" : "",
          }),
          headers: {
            Authorization: `Bearer ${loggedIn}`,
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setMessage("Update Successfully");
        setLoading(true);
        setHideMessage(true);
        setTimeout(() => {
          setHideMessage(false);
          setLoading(false);
          router.push("/admin/admins");
        }, 3000);
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
          <div className="container mx-auto mt-12 w-1/2">
            {loggedIn ? (
              <>
                {" "}
                {hideMessage ? (
                  <AlertMessage
                    message={message}
                    bg="alert alert-success"
                    text="text-green-900"
                  />
                ) : (
                  ""
                )}
                <h1 className=" text-4xl mb-12 underline">Edit Admin</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 items-center grid grid-cols-5">
                    <label className="text-bold block">Display Name</label>

                    <input
                      name="display_name"
                      defaultValue={item.display_name}
                      onChange={handleChange}
                      className="border-gray-200 border p-2 w-96 rounded-lg"
                      placeholder="Input Display name"
                    />
                  </div>
                  <div className="mb-6 items-center grid grid-cols-5">
                    <label className="text-bold block">Username</label>
                    <input
                      name="username"
                      defaultValue={item.username}
                      onChange={handleChange}
                      className="border-gray-200 border p-2 w-96 rounded-lg"
                      placeholder="Input username"
                    />
                  </div>
                  <div className="mb-6 items-center grid grid-cols-5">
                    <label className="text-bold block">Password</label>
                    <input
                      name="password"
                      defaultValue={item.password}
                      onChange={handleChange}
                      className="border-gray-200 border p-2 w-96 rounded-lg"
                      placeholder="Unchnaged"
                    />
                  </div>
                  <div className="mb-6 items-center grid grid-cols-5">
                    <label className="text-bold block">Role</label>

                    <select
                      className="border-gray-200 border p-2 w-96 rounded-lg"
                      name="role"
                      defaultValue={item.role}
                      onChange={handleChange}
                    >
                      {item.role === "Admin" ? (
                        <>
                          <option value="Admin">Admin</option>
                          <option value="Root">Root</option>
                        </>
                      ) : (
                        <>
                          <option value="Root">Root</option>
                          <option value="Admin">Admin</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-2">
                      <button
                        type="submit"
                        className={`btn w-full ${
                          loading ? "loading" : "btn-success"
                        }`}
                      >
                        {loading ? "loading..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <>
                <Notfound />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editamdin;
Editamdin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
