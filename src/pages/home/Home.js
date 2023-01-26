import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BannerOne from "../../assets/images/banner.jpg";
import BannerTwo from "../../assets/images/banner.png";
import ProductCard from "../../components/resuable/ProductCard";
import { useGetProductsQuery } from "../../features/product/productApi";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const productSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <>
      <section className="banner">
        {" "}
        <Slider {...bannerSettings}>
          <div>
            <img width={"100%"} className="rounded" src={BannerOne} alt="" />
          </div>
          <div>
            <img width={"100%"} className="rounded" src={BannerTwo} alt="" />
          </div>
        </Slider>
      </section>
      <h1 className="text-3xl my-4 font-bold text-blue-900">Top Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto my-10">
        {products?.data.slice(0,4).map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <Link to={'/products'}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-8" >See All products</button>
      </Link>
    </>
  );
};

export default Home;
