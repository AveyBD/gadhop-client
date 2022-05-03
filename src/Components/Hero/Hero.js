import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Manage Your Inventory.
              <strong className="font-extrabold text-green-700 sm:block">
                Perfectly, Correctly!
              </strong>
            </h1>

            <p className="mt-4 sm:leading-relaxed sm:text-xl">
              With Gadget Hope, you can manage your gadget inventory with perfectly. You can generate your monthly sales, purchases with gadget Hope. Join today to make your business perfect.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-green-600 rounded shadow sm:w-auto active:bg-green-500 hover:bg-green-700 focus:outline-none focus:ring"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                className="block w-full px-12 py-3 text-sm font-medium text-green-600 rounded shadow sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
