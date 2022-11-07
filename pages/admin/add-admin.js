import React, { useState, useContext } from "react";
import AuthContext from "../../pages/context/authContext";
import AlertMessage from "../../components/alertMessage";

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

  const { display_name, username, password, role } = value;
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://unicef.koompi.app/private/api/admin/add`, {
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
        setHideMessage(true);
        setTimeout(() => {
          setHideMessage(false);
        }, 3000);
        setValue({
          display_name: "",
          username: "",
          password: "",
          role: "Admin",
        });
        setLoading(false);
      });
      // const data = await response.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto mt-12">
      {hideMessage ? <AlertMessage message={message} /> : ""}
      <h1 className="text-gray-700 text-4xl mb-12 underline">Add Admins</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="text-bold block">Display Name</label>
          <input
            name="display_name"
            value={display_name}
            onChange={handleChange}
            className="border-gray-200 border p-2 w-96 rounded-lg"
            placeholder="Input Display name"
          />
        </div>
        <div className="mb-6">
          <label className="text-bold block">Username</label>
          <input
            name="username"
            value={username}
            onChange={handleChange}
            className="border-gray-200 border p-2 w-96 rounded-lg"
            placeholder="Input username"
          />
        </div>
        <div className="mb-6">
          <label className="text-bold block">Password</label>
          <input
            name="password"
            value={password}
            onChange={handleChange}
            className="border-gray-200 border p-2 w-96 rounded-lg"
            placeholder="Input Password"
          />
        </div>
        <div className="mb-6">
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
          {/* <input
            name="role"
            value={role}
            onChange={handleChange}
            className="border-gray-200 border p-2 w-96 rounded-lg"
            placeholder="Input Role"
          /> */}
        </div>
        {username === "" ||
        password === "" ||
        display_name === "" ||
        role === "" ? (
          <button disabled className="btn btn-success w-96">
            Submit
          </button>
        ) : (
          <button type="submit" className="btn btn-success w-96">
            {loading ? "loading..." : "Submit"}
          </button>
        )}
      </form>
    </div>
  );
};

export default Addamdin;
Addamdin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
