import React, { createContext, use, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

// const { VITE_API_PRODUCTION, VITE_API_LOCAL, DEV } = import.meta.env;
// const url = DEV === true ? VITE_API_LOCAL : VITE_API_PRODUCTION;
const AuthContext = createContext();

function AuthContextProvider(props) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState("");
  const [token, setToken] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getLoggedIn() {
    const token = localStorage.getItem("token");
    setLoggedIn(token);
    // setDecode(jwt.decode(token));
    // const decode = jwt.decode(token);
    // setDecode(decode);
    // console.log(decode, "toekn");
    // if (!decode) {
    //   router.push("/login");
    // }
  }
  useEffect(() => {
    getLoggedIn();
  }, [getLoggedIn]);

  useEffect(() => {
    const tokenn = localStorage.getItem("token");
    const decode = jwt.decode(tokenn);
    setToken(decode);
    if (token) {
      if (token.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        window.location.replace("/");
      }
    }
  }, [loggedIn]);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
