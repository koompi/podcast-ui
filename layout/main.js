import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 h-screen">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
