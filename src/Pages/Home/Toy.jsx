import React from "react";

const Toy = ({ toy }) => {
  const { name, img, price, ratings } = toy;
  console.log(toy);
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
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Toy;
