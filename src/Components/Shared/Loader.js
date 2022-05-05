import React from "react";

const Loader = () => {
  const circleCommonClasses = "h-4 w-4 bg-current text-green-500 rounded-full";
  return (
    <div className="flex h-screen content-center justify-center items-center">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce 200`}></div>
      <div className={`${circleCommonClasses} animate-bounce 400`}></div>
    </div>
  );
};

export default Loader;
