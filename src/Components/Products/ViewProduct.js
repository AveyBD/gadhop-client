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
    <div>
      <h2>{sProduct.name}</h2>
    </div>
  );
};

export default ViewProduct;
