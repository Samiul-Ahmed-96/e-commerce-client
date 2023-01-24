import React from "react";
import { BiLogInCircle, BiRegistered } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-14 container bg-blue-200 rounded m-2 mx-auto px-5">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-blue-900">
        <h1>E - Commerce</h1>

        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <ul className="flex gap-3">
          <Link to="/login">
            <li title="Login" className="bg-blue-500 p-2 rounded-full">
              <BiLogInCircle className="text-white " />
            </li>
          </Link>
          <Link to="/register">
            <li title="Register" className="bg-blue-500 p-2 rounded-full">
              <BiRegistered className="text-white " />
            </li>
          </Link>
          <Link to="/cart">
            <li title="cart" className="bg-blue-500 p-2 rounded-full">
              <BsFillCartFill className="text-white " />
            </li>
          </Link>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
