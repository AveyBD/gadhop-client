import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Items from "../Manage/Items";

const MyItems = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://gadhop.herokuapp.com/my?uid=${user.uid}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);
  return (
    <div className="md:w-3/4 mx-auto mt-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Products Uploaded By You
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
            {myProducts.map((product) => (
              <Items key={product._id} product={product}></Items>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
