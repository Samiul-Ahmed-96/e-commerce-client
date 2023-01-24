import React from "react";
import ProductCard from "../../components/resuable/ProductCard";
import { useGetProductsQuery } from "../../features/product/productApi";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  return (
    <>
      <h1 className="text-3xl my-4 font-bold text-blue-900">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto my-10">
        {products?.data.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
