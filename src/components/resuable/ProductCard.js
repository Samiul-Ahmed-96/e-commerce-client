import React from "react";
import { BiPlus } from "react-icons/bi";

const ProductCard = ({ product }) => {
  return (
    <div
      className='shadow-lg rounded border  p-3 flex flex-col text-blue-900'
      key={product._id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className='flex justify-center gap-2 my-5'>
        <button className='bg-blue-500 rounded-full py-1 px-2 flex items-center text-white text-bold'>
          Add to cart
          <BiPlus className='text-white' size={25} />
        </button>
        <button
          title='Show Details'
          className='bg-blue-500  py-1 px-2 rounded-full flex items-center text-white'
        >
        Details
          
        </button>
      </div>
    </div>
  );
};

export default ProductCard;