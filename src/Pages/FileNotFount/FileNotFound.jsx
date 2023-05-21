import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import errorImg1 from "../../assets/filenotfound.png";
import errorImg2 from "../../assets/error-img.png";

const FileNotFound = () => {
  const error = useRouteError();
  return (
    <div className="w-full bg-slate-100 h-screen flex flex-col justify-center items-center">
      <img
        className=" md:w-44 h-auto md:h-32"
        src={error?.status === 404 ? errorImg1 : errorImg2}
        alt=""
      />
      {error?.status !== 404 && (
        <h1 className="text-2xl md:text-5xl text-bolder mt-5">
          {error?.status}
        </h1>
      )}
      <h1 className="text-xl md:text-3xl mt-4">{error?.data}</h1>
      <Link to="/" className="btn btn-primary mt-5">
        Home
      </Link>
    </div>
  );
};

export default FileNotFound;
