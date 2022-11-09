import React, { createContext, use, useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState("");
  const [token, setToken] = useState({});

  async function getLoggedIn() {
    const token = localStorage.getItem("token");
    setLoggedIn(token);
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
