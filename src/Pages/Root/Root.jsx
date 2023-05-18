import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="bg-slate-50">
      <Navbar></Navbar>
      <div className="max-w-[85rem] mx-auto">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
