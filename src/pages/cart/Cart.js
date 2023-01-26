import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/resuable/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
      <h1 className="text-3xl my-4 font-bold text-blue-900">{
        cart.length > 0 ? "Cart" : "Cart is empty"
      }</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto my-10">
        {cart?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Cart;
