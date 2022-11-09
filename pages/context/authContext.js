import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

// const { VITE_API_PRODUCTION, VITE_API_LOCAL, DEV } = import.meta.env;
// const url = DEV === true ? VITE_API_LOCAL : VITE_API_PRODUCTION;
const AuthContext = createContext();

function AuthContextProvider(props) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState("");
  const [decode, setDecode] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getLoggedIn() {
    const token = localStorage.getItem("token");
    setLoggedIn(token);
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

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
