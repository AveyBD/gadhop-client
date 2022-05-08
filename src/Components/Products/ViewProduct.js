import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  const [sProduct, setSProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `https://gadhop.herokuapp.com/view/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSProduct(data));
  }, []);
  console.log(sProduct);
  return (
    <div className="w-full md:w-3/4 mx-auto mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            className="h-96 w-96"
            src={sProduct.imgURL}
            alt={sProduct.name}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center">{sProduct.name}</h2>
          <p>
            <span className="font-bold">Supplier:</span>
            {sProduct.supplier}
          </p>
          <p>
            <span className="font-bold">Price:</span>
            {sProduct.price}
          </p>
          <p>
            <span className="font-bold">Quantity:</span>
            {sProduct.quantity}
          </p>
          <p>
            <span className="font-bold">Description:</span>
          </p>
          <p> {sProduct.description}</p>
          <div className="flex gap-2 justify-evenly">
              <button className="px-4 py-2 bg-green-400 rounded text-white font-bold">
                Deliver
              </button>
              <button className="px-4 py-2 bg-green-400 rounded text-white font-bold">
                Add Stock
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
