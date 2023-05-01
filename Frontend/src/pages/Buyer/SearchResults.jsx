import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Products from "../../components/Products";
import { useLocation } from "react-router";
import styled from "styled-components";

const Filler = styled.div`
  height: 12vh;
`;

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  height: 10vh;
  /* margin: 3%; */
  padding: 2%;
  color: #0e1832;
  font-size: xxx-large;
  background-color: #9BA4B5;
  box-shadow: 10px 10px 10px #ddd;
  /* background-image: linear-gradient(to bottom right, #9BA4B5, #f6f8fa); */
  /* background-image: radial-gradient(#9BA4B5 100px, #f6f8fa); */

`


const SearchResults = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  return (
    <div>
      <Navbar />
      <Filler>HI</Filler>
      <Heading>{category}</Heading>
      <Products category={category} />
      <Footer />
    </div>
  );
};

export default SearchResults;
