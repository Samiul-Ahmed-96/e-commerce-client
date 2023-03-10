import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar = () => {

  const cart = useSelector((state) => state.cart.cart);

  return (
    <nav className="h-14 container bg-blue-200 rounded m-2 mx-auto px-5">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-blue-900">
        <Link to={'/'}>
        <h1>E - Commerce</h1>
        </Link>

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
            <li title="Login" className="bg-blue-500 py-1 px-3 text-white rounded-full ">
              Login
            </li>
          </Link>
          <Link to="/register">
            <li title="Register" className="bg-blue-500 py-1 px-3 text-white rounded-full">
              Register
            </li>
          </Link>
          <Link to="/cart">
            <li title="cart" className="bg-blue-500 p-2 relative rounded-full">
              <BsFillCartFill className="text-white " />
              <span className="absolute right-0 bg-white rounded-full flex justify-center items-center w-4 top-[-10px] text-[10px]">{cart.length}</span>
            </li>
          </Link>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
