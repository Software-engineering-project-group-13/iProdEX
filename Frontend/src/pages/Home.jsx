import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Products category="noCat" />
      <Footer />
    </div>
  );
};

export default Home;
