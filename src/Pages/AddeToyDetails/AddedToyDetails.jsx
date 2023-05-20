import React from "react";
import { useLoaderData } from "react-router-dom";

const AddedToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    description,
    toyPicture,
    name,
    price,
    quantity,
    ratings,
    sellerEmail,
    sellerName,
  } = toy;
  return (
    <div className="card md:card-side shadow-xl my-20 border">
      <figure className="p-2 md:pl-4">
        <img className="rounded-lg" src={toyPicture} alt="car" />
      </figure>
      <div className="card-body md:w-1/2">
        <h2 className="card-title">{name}</h2>
        <div className="md:flex">
          <div>
            <p>
              <span className="font-semibold">Price</span> ${price}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span> {quantity}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {ratings}
            </p>
          </div>
          <div className="md:ml-32">
            <p>
              <span className="font-semibold">Company:</span> {sellerName}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {sellerEmail}
            </p>
          </div>
        </div>
        <p>
          <span className="font-semibold">Descriptions:</span> {description}
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default AddedToyDetails;
