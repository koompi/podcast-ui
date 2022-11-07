import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

// const { VITE_API_PRODUCTION, VITE_API_LOCAL, DEV } = import.meta.env;
// const url = DEV === true ? VITE_API_LOCAL : VITE_API_PRODUCTION;
const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState("");

  async function getLoggedIn() {
    const token = localStorage.getItem("token");
    setLoggedIn(token);
  }
  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
