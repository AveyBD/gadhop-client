import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-200 bg-linear-pink-invert mt-24">
      <div className="mx-auto container flex flex-col items-center justify-center">
        <div className="text-black flex flex-col md:items-center f-f-l pt-3">
          <h1 className="text-2xl font-black">Gadget Hope Inc.</h1>
          <div className="md:flex items-center mt-5 text-base text-color f-f-l">
            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
              Join Now
            </h2>
            <h2 className="cursor-pointer">Pricing</h2>
          </div>
          <div className="text-sm text-color f-f-l">
            <p> © 2022 Gadget Hope. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
