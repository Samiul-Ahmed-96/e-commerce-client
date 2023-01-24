import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div
      className="shadow-lg relative rounded border  p-3 flex flex-col text-blue-900"
      key={product._id}
    >
      {pathname.includes("cart") && (
        <div className="rounded-full grid place-items-center absolute top-2 right-2 bg-blue-500 text-white h-8 w-8 font-bold ">
          <p> {product.quantity} </p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className="flex justify-center gap-2 my-5">
        {pathname.includes("cart") ? (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-red-500 rounded-full py-1 px-2 flex items-center text-white text-bold"
          >
            Remove from cart
            <BiMinus className="text-white" size={25} />
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-500 rounded-full py-1 px-2 flex items-center text-white text-bold"
          >
            Add to cart
            <BiPlus className="text-white" size={25} />
          </button>
        )}

        <button
          title="Show Details"
          className="bg-blue-500  py-1 px-2 rounded-full flex items-center text-white"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
