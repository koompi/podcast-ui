import React from "react";

const Logout = () => {
  const Logout = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };
  return <div onClick={Logout}>Logout</div>;
};

export default Logout;
