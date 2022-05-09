import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import SingleFeatured from "./SingleFeatured";

const FeaturedProduct = () => {
  const [products, setProducts] = useProducts();
  return (
      <>
    <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-6 gap-1 mx-auto">
      {products.slice(0, 6).map((product) => (
        <SingleFeatured key={product._id} product={product}></SingleFeatured>
      ))}
    </div>
    <Link className="block w-1/2 py-2 rounded text-center font-bold mt-3 bg-green-400 mx-auto " to={"/manage"}>
        Manage Inventories
      </Link>
    </>
  );
};

export default FeaturedProduct;
