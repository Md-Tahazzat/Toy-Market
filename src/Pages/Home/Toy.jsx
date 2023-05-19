import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toy = ({ toy }) => {
  const navigate = useNavigate();
  const { _id, name, img, price, ratings } = toy;

  return (
    <div className="card w-full shadow-xl">
      <figure>
        <img className="w-full md:w-[20rem] h-48" src={img} alt="car" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Ratings: {ratings}</p>
        <div className="card-actions justify-start">
          <Link to={`/toys/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Toy;
