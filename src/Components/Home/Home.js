import React from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Hero from "../Hero/Hero";
import NewsLetter from "../NewsLetter/NewsLetter";
import Pricing from "../Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturedProduct></FeaturedProduct>
      <Pricing></Pricing>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
