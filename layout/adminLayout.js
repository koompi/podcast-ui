import React from "react";
import AdminSidebar from "../components/adminSidebar";
import Navbar from "../components/navbar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 h-screen p-7">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
