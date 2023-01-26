import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const employerRoutes = [
    {
      name: "Add Product",
      path: "add-product",
    },
    {
      name: "Manage Products",
      path: "manage-products",
    },
  ];
  return (
    <div className="bg-blue-200 lg:col-span-2 h-screen sticky top-0 sm:col-span-4">
      <ul className="flex flex-col gap-2 w-full h-full  p-3">
        <div className="flex lg:flex-row lg:justify-between lg:items-center sm:flex-col  my-1">
          <Link to="/" className="flex items-center">
            <FaChevronLeft />
            <h1>Back</h1>
          </Link>
          <h1 className="text-xl">Dashboard</h1>
        </div>
        {
          employerRoutes.map(({ name, path }) => (
            <li>
              <Link
                className="hover:bg-blue-900 hover:text-white transition-all w-full block py-2 px-3 rounded-full"
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}
        
      </ul>
    </div>
  );
};

export default Sidebar;
