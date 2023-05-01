import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Products from "../../components/Products";
import { useLocation } from "react-router";
import styled from "styled-components";

const Filler = styled.div`
  height: 50px;
`;

const SearchResults = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  return (
    <div>
      <Navbar />
      <Filler />
      <Products category={category} />
      <Footer />
    </div>
  );
};

export default SearchResults;
