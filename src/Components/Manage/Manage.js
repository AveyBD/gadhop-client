import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Manage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://gadhop.herokuapp.com/manage")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>Manage Here {products.length}
      {
          console.log(products)
      }</h2>
    </div>
  );
};

export default Manage;
