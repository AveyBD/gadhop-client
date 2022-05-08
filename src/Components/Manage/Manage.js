import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Items from "./Items";

const Manage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://gadhop.herokuapp.com/manage")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="md:w-3/4 mx-auto mt-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Manage All Product
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Supplier
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =><Items key={product._id} product={product}></Items>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
