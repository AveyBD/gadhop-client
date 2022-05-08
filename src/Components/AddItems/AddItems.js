import { data } from "autoprefixer";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import auth from "../../firebase.init";

const AddItems = () => {
  const [user] = useAuthState(auth);
  const nameRef = useRef("");
  const supplierRef = useRef("");
  const priceRef = useRef();
  const descriptionRef = useRef("");
  const imgurlRef = useRef("");
  const handleAddItem = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const supplier = supplierRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;
    const imgURL = imgurlRef.current.value;
    const owner = user.email;
    const product = { name, supplier, price, description, imgURL, owner };
    const url = "https://gadhop.herokuapp.com/product";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("Successfully Added!");
  };
  return (
    <div className="md:w-3/4 mt-3 md:mt-6 mx-auto">
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <h3 className="text-3xl text-center font-bold leading-6 text-gray-900 mb-3 md:mb-8">
        Add Product
      </h3>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <p className="mt-1  text-gray-600">
              Add Your Product info here. Please Follow the rules before adding
              the products.
            </p>
            <h2 className="text-xl font-bold">Rules:</h2>
            <div className="bg-white rounded-lg shadow w-full">
              <ul className="divide-y divide-gray-100">
                <li className="p-3 rounded hover:text-lg hover:bg-green-600 hover:text-white">
                  Add Name Properly.
                </li>
                <li className="p-3 rounded hover:text-lg hover:bg-green-600 hover:text-white">
                  Search Before Add.
                </li>
                <li className="p-3 rounded hover:text-lg hover:bg-green-600 hover:text-white">
                  Careful about supplier name.
                </li>
                <li className="p-3 rounded hover:text-lg hover:bg-green-600 hover:text-white">
                  Use imgBB for image link.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleAddItem}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block  font-medium text-gray-700"
                  >
                    Product Name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={nameRef}
                      id="name"
                      name="name"
                      className="shadow-sm pl-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm: border border-gray-300 rounded-md"
                      placeholder="iPhone 12 Pro Max"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="supplier"
                    className="block  font-medium text-gray-700"
                  >
                    Supplier Name
                  </label>
                  <div className="mt-1">
                    <input
                      ref={supplierRef}
                      id="supplier"
                      name="supplier"
                      className="shadow-sm pl-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm: border border-gray-300 rounded-md"
                      placeholder="Apple Computer, Inc."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="price"
                      className="block font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        $
                      </span>
                      <input
                        ref={priceRef}
                        type="number"
                        name="price"
                        id="price"
                        className="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm: border-gray-300 border pl-4 "
                        placeholder="947"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block  font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      ref={descriptionRef}
                      id="description"
                      name="description"
                      rows={3}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm: border border-gray-300 rounded-md"
                      placeholder="With the Apple iPhone 12 Pro Max, our collection is finally complete. It is the biggest, heaviest, most powerful, and most feature-rich iPhone Apple has made so far, and that's enough to make it the best-seller it was designed to become.

                      "
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="imgURL"
                      className="block  font-medium text-gray-700"
                    >
                      Image URL
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        http://
                      </span>
                      <input
                        ref={imgurlRef}
                        type="text"
                        name="imgURL"
                        id="imgURL"
                        className="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm: border-gray-300 border pl-4 "
                        placeholder="imgbb.com/"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
