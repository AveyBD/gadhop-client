import React from "react";
import { useNavigate } from "react-router-dom";

const SingleFeatured = ({ product }) => {
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/view/${id}`);
  };
  return (
    <div className="border bg-green-100 border-green-200 rounded">
      <img
        src={product.imgURL}
        className="w-11/12 mx-auto h-56"
        alt={product.name}
      />
      <h2 className="mt-2 font-bold text-center">{product.name}</h2>
      <button
        onClick={() => handleView(product._id)}
        className="w-full bg-green-600 py-2 rounded text-white font-bold"
      >
        View
      </button>
    </div>
  );
};

export default SingleFeatured;
