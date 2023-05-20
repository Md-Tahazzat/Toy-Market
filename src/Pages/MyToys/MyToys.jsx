import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allAddedToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          toast.success("deleted successfully");
        }
      });
  };
  console.log(toys[0]);
  return (
    <div className="py-10">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-slate-700 my-5">
        Your added toys
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Seller</th>
              <th>Seller Email</th>
              <th>Ratings</th>
              <th>Available Quantity</th>
              <th>Sub-category</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, indx) => {
              return (
                <tr key={indx} className="hover">
                  <th>
                    <img className="w-20" src={toy?.toyPicture} alt="" />
                  </th>
                  <td>{toy?.toyName}</td>
                  <td>{toy?.price}</td>
                  <td>{toy?.sellerName}</td>
                  <td>{toy?.sellerEmail}</td>
                  <td>{toy?.ratings}</td>
                  <td>{toy?.availableQuantity}</td>
                  <td>{toy?.subCategory}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(toy?._id)}
                      className="py-1 px-2 rounded bg-blue-300 text-slate-700 hover:bg-blue-400"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/updateToy/${toy._id}`}
                      className="py-1 px-2 rounded bg-blue-300 text-slate-700 hover:bg-blue-400"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyToys;
