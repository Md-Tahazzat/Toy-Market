import React from "react";
import { useLoaderData } from "react-router-dom";

const AddedToyDetails = () => {
  const toy = useLoaderData();
  console.log(toy);
  const {
    description,
    toyPicture,
    toyName,
    price,
    quantity,
    ratings,
    sellerEmail,
    sellerName,
  } = toy;
  return (
    <>
      <h1 className="text-center mt-5 mb-2 text-2xl ">Details of {toyName}</h1>
      <div className="card md:card-side shadow-xl my-20 border">
        <figure className="p-2 md:pl-4 max-w-xs">
          <img className="rounded-lg w-full" src={toyPicture} alt="car" />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title">{toyName}</h2>
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
        </div>
      </div>
    </>
  );
};

export default AddedToyDetails;
