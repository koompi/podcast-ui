import React from "react";

const Logout = () => {
  const Logout = () => {
    localStorage.removeItem("token");
  };
  return <div onClick={Logout}>Logout</div>;
};

export default Logout;
