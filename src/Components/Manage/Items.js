import React from "react";
import { Link } from "react-router-dom";

const Items = ({ product }) => {
  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {product.name}
      </td>
      <td className="px-6 py-4">{product.quantity}</td>
      <td className="px-6 py-4">{product.supplier}</td>
      <td className="px-6 py-4">{product.price}</td>
      <td className="px-6 py-4 text-right">
        <Link
          to={`/view/${product._id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default Items;
