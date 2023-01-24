import React from "react";
import ProductCard from "../../components/resuable/ProductCard";
import { useGetProductsQuery } from "../../features/product/productApi";

const Home = () => {
  
  const {data : products , isLoading} = useGetProductsQuery();

  return (
    <>
    <h1 className="text-3xl my-4 font-bold text-blue-900">Products</h1>
    <div className="grid grid-rows-2 grid-flow-col gap-4">
    {products?.data.map((product) => (
      <ProductCard key={product._id} product={product}></ProductCard>
    ))}
    </div>
    </>
   
  );
};

export default Home;
