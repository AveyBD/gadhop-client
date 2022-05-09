import React from "react";
import useProducts from "../../hooks/useProducts";
import SingleFeatured from "./SingleFeatured";

const FeaturedProduct = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-6 gap-1 mx-auto">
      {products.slice(0,6).map((product) => (
        <SingleFeatured key={product._id} product={product}></SingleFeatured>
      ))}
    </div>
  );
};

export default FeaturedProduct;
