import React from "react";

const Blog = () => {
  return (
    <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20">
      <div className="lg:flex justify-center">
        <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
          <img
            src="https://www.valuecoders.com/blog/wp-content/uploads/2021/03/Node.JS-VS-JavaScript-1-930x620.jpg"
            alt="Javascript Vs NodeJS"
            className="lg:w-full w-auto"
          />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-base leading-4 text-gray-500">Today</p>
                <p className="text-base leading-none text-gray-500 ml-12">Q1</p>
              </div>
              <div className="flex items-center">
                <svg
                  width={64}
                  height={2}
                  viewBox="0 0 64 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64 1H0" stroke="#6B7280" />
                </svg>
                <p className="text-base leading-none text-gray-500 ml-2">
                  Debashish D. Dev
                </p>
              </div>
            </div>
            <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">
              What is the deference between JavaScript and NodeJS
            </h1>
            <p className="text-base leading-6 text-gray-600 mt-2">
              JavaScript is a lightweight programming language. It was made to
              run on browser only. So that we can make our website interactive.
              Its a interpreted single threaded language. On the other hand
              NodeJS is a server side language written in JavaScript and runs on
              Chrome V8 Engine. Node JS made it possible to run JavaScript on
              Backend. Though javascript is single threaded but NodeJS is
              multithreaded. NodeJS can run on any OS with the help of chrome V8
              Engine. It is super fast in terms of other server.
            </p>
          </div>
        </div>
        <div className="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
          <div className="lg:w-auto sm:w-1/2">
            <img
              src="https://i.ibb.co/VtdD4H3/nodeandmongo.png"
              alt="NodeJS and MongoDB"
              className="w-full"
            />
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-base leading-4 text-gray-500">Today</p>
                  <p className="text-base leading-none text-gray-500 ml-12">
                    Q2
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width={64}
                    height={2}
                    viewBox="0 0 64 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 1H0" stroke="#6B7280" />
                  </svg>
                  <p className="text-base leading-none text-gray-500 ml-2">
                    Debashish D. Dev
                  </p>
                </div>
              </div>
              <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                When to use NodeJS and MongoDB
              </h1>
              <p className="text-base leading-6 text-gray-600 mt-2">
                NodeJS is a server and MongoDB is a NoSQL database. We use nodejs to communicate between client and Database. 
              </p>
            </div>
          </div>
          <div className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2">
            <img
              src="https://tomaztsql.files.wordpress.com/2022/02/screenshot-2022-02-13-at-20.38.39.png?w=578"
              alt="SQL vs NoSQL"
              className="w-full"
            />
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-base leading-4 text-gray-500">Today</p>
                  <p className="text-base leading-none text-gray-500 ml-12">
                    Q3
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width={64}
                    height={2}
                    viewBox="0 0 64 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 1H0" stroke="#6B7280" />
                  </svg>
                  <p className="text-base leading-none text-gray-500 ml-2">
                    Debashish D. Dev
                  </p>
                </div>
              </div>
              <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                SQL vs NoSQL
              </h1>
              <p className="text-base leading-6 text-gray-600 mt-2">
                SQL is relational but NoSQL is document based. SQL can be scale vertically on the other hand NoSQL can be scale horizontally. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
