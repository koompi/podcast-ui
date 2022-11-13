import React from "react";
import AdminSidebar from "../components/adminSidebar";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 h-screen p-7 container mx-auto mt-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
