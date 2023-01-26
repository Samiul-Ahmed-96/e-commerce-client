import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import { useGetProductByIdQuery } from "../../features/product/productApi";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { id } = useParams();

  const { data: product, isLoading, isSuccess } = useGetProductByIdQuery(id);

  let content;

  if (isLoading) {
    content = "Loading";
  }

  if (isSuccess) {
    content = (
      <div
        className="shadow-lg relative rounded border flex flex-col text-blue-900"
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
        <p className="text-center font-semibold mb-3">
          Rating: {product.rating}
        </p>
        <div className=" flex justify-center">
          <ul className="space-y-2">
            {product.keyFeature.map((feature) => {
              return (
                <li key={feature} className="text-sm ">
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="flex justify-center gap-2 my-5">
          {pathname.includes("cart") ? (
            <button
              onClick={() => dispatch(removeFromCart(product))}
              className="bg-red-500 rounded-full py-1 px-2 flex items-center text-white text-bold"
            >
              <BiMinus className="text-white" size={25} />
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 rounded-full py-1 px-2 flex items-center text-white text-bold"
            >
              <BiPlus className="text-white" size={25} />
              Add to cart
            </button>
          )}
          <Link to={`/product/${product._id}`}>
            <button
              title="Show Details"
              className="bg-blue-500  py-1 px-2 rounded-full flex items-center text-white"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    );
  }


  return (
   <>
    {content}
   </>
  );
};

export default ProductDetails;
