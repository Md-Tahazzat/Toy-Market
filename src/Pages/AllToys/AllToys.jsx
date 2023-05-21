import React, { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import updateTitle from "../../components/PrivateRoute/Utilities/UpDateTitle";
import Loading from "../Shared/Loading";

const AllToys = () => {
  updateTitle("All Toys");
  const data = useLoaderData();
  const navigation = useNavigation();
  const [toys, setToys] = useState(data);
  const [inputText, setInputText] = useState("");
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    const filteredToys = data?.filter((toy) => {
      const toyName = toy.toyName.toLowerCase();
      if (toyName.includes(inputText.toLowerCase())) return true;
      return false;
    });
    setInputText("");
    setToys(filteredToys);
  };

  if (navigation.state === "loading") return <Loading></Loading>;
  return (
    <div className="py-10">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-slate-700 my-5">
        All Added Toys
      </h1>
      <div className="text-center flex items-center justify-center btn-group mb-4">
        <input
          onChange={handleInputChange}
          type="text"
          value={inputText}
          placeholder="Search by toy name"
          className="input input-group focus:outline-none rounded-r-none input-bordered w-full max-w-xs"
        />
        <button onClick={handleSearch} className="btn text-xl">
          <FaSearch />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy</th>
              <th>Price</th>
              <th>Seller</th>
              <th>Available Quantity</th>
              <th>Sub-category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, indx) => {
              return (
                <tr key={indx} className="hover">
                  <th>{indx + 1}</th>
                  <td>{toy?.toyName}</td>
                  <td>{toy?.price}</td>
                  <td>{toy?.sellerName}</td>
                  <td>{toy?.availableQuantity}</td>
                  <td>{toy?.subCategory}</td>
                  <td>
                    <Link
                      to={`/addedToyDetails/${toy._id}`}
                      className="py-1 px-2 rounded bg-blue-300 text-slate-700 hover:bg-blue-400"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
