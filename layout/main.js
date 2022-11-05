import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen p-7">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
