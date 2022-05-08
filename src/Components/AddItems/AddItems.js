import React from "react";

const AddItems = () => {
  return (
    <div className="md:w-3/4 md:mt-6 mx-auto">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add Product
            </h3>
            <p className="mt-1  text-gray-600">
              Add Your Product info here. Please Follow the rules before adding
              the products.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
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
                      id="name"
                      name="name"
                      className="shadow-sm pl-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm: border border-gray-300 rounded-md"
                      placeholder="iPhone 12 Pro Max"
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
                  Save
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
