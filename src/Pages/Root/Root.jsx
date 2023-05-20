import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Root = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-slate-50">
      <Navbar></Navbar>
      <div className="max-w-[85rem] md:mx-auto mx-4">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
