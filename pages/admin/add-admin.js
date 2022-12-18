import React, { useState, useContext } from "react";
import AuthContext from "../../components/context/authContext";
import AlertMessage from "../../components/alertMessage";
import Notfound from "../404";
import Navbar from "../../components/navbar";
import AdminSidebar from "../../components/adminSidebar";
import Footer from "../../components/footer";

const Addamdin = () => {
  const { loggedIn } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hideMessage, setHideMessage] = useState(false);
  const [value, setValue] = useState({
    display_name: "",
    username: "",
    password: "",
    role: "Admin",
  });
  const [bg, setBg] = useState("");
  const [text, setText] = useState("");

  const { display_name, username, password, role } = value;
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://unicefbackend.koompi.app/private/api/admin/add`, {
        method: "POST",
        body: JSON.stringify({
          ...value,
        }),
        headers: {
          Authorization: `Bearer ${loggedIn}`,
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setMessage("Add Successfully");
        setLoading(true);
        setText("text-green-900");
        setBg("alert alert-success");
        setHideMessage(true);
        setTimeout(() => {
          setHideMessage(false);
          setLoading(false);
          setValue({
            display_name: "",
            username: "",
            password: "",
            role: "Admin",
          });
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
                {hideMessage ? (
                  <AlertMessage message={message} bg={bg} text={text} />
                ) : (
                  ""
                )}

                <h1 className=" text-4xl mb-12 underline">
                  បន្ថែម អ្នកគ្រប់គ្រង
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 grid grid-cols-5 items-center">
                    <label className="text-bold block">Display Name</label>
                    <input
                      name="display_name"
                      value={display_name}
                      onChange={handleChange}
                      className="border-gray-200 border p-2 w-96 rounded-lg"
                      placeholder="Input Display name"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-5 items-center">
                    <label className="text-bold block">Username</label>
                    <input
                      name="username"
                      value={username}
                      onChange={handleChange}
                      className="border-gray-200 border p-2 w-96 rounded-lg"
                      placeholder="Input username"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-5 items-center">
                    <label className="text-bold block">Password</label>
                    <input
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className="border-gray-200 border p-2 w-96 rounded-lg"
                      placeholder="Input Password"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-5 items-center">
                    <label className="text-bold block">Role</label>

                    <select
                      className="border-gray-200 border p-2 w-96 rounded-lg"
                      name="role"
                      value={role}
                      onChange={handleChange}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Root">Root</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {username === "" ||
                    password === "" ||
                    display_name === "" ||
                    role === "" ? (
                      <>
                        <div className="col-span-2">
                          <button disabled className="btn btn-success w-full">
                            Submit
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
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

export default Addamdin;
Addamdin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
