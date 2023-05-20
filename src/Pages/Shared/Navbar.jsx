import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser().then((result) => console.log(result));
  };
  const items = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addedToys">All Toys</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/myToys">My Toys</NavLink>
          </li>
          <li>
            <NavLink to="/toy/add">Add A Toy</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {loading ? (
        <li className="w-5 h-5 animate-spin border-4 border-dotted border-blue-500 rounded-full"></li>
      ) : user ? (
        <>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>

          <img
            title={user?.displayName}
            className="w-10 h-10 rounded-full border"
            src={
              user?.photoURL
                ? `${user?.photoURL}`
                : "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
            }
            alt=""
          />
        </>
      ) : (
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      )}
    </>
  );

  console.log(user?.photoURL);
  return (
    <nav className="w-full bg-slate-200">
      <div className="navbar max-w-[85rem] mx-auto">
        <div className="flex items-center justify-center w-full  md:navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact bg-slate-200 border dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <div className="w-full flex justify-center md:justify-start items-center">
            <img
              className="w-16 h-16"
              src="https://i.ibb.co/6v305Kk/toy-logo-1.png"
              alt=""
            />
            <a className=" normal-case text-xl ml-[20%] md:ml-4 font-semibold text-slate-800">
              Toy Box
            </a>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold flex items-center">
            {items}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
