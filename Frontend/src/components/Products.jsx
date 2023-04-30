import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import Product from "./Product";

const Container = styled.div`
  /* background-color: #7E8A97; */
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        console.log(typeof res.data);
        setProducts(res.data);
      } catch {}
    };
    getProduct();
  }, []);
  return (
    <Container>
      {Object.keys(products).map((key) => (
        <Product item={products[key]} />
      ))}
    </Container>
  );
};

export default Products;
