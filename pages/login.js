import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [message, setMessage] = useState("");
  // const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { username, password } = value;

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post("https://unicef.koompi.app/public/api/login", value)
        .then((res) => {
          localStorage.setItem("token", res.data);
          console.log(res);
        });
      // await axios.post(`http://localhost:9090/api/login`, value, config);

      // await getLoggedIn();
      //   history("/");
    } catch (error) {
      setLoading(false);
      setMessage("Incorrect Username or Password");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      message;
    }, 1000);
    return () => clearTimeout(timer);
  }, [message]);
  return (
    <div>
      <center>{message}</center>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-base-300 p-6 rounded-lg ">
          <h1 className="text-center font-bold text-gray-900 text-2xl uppercase">
            Login
          </h1>
          <form onSubmit={submitHandle} className="space-y-3">
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400">
              Username
            </label>

            <input
              name="username"
              value={username}
              onChange={handleChange}
              className="p-2 border-2 rounded-lg w-96"
              placeholder="Email"
            />
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400">
              Password
              {/* {value.password} */}
            </label>
            <input
              type="password"
              onChange={handleChange}
              value={password}
              name="password"
              className="p-2 border-2 rounded-lg w-96"
              placeholder="Password"
            />

            <div className="mt-32">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                {loading ? "..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
