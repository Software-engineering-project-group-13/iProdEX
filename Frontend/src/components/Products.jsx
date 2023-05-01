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

const Products = (props) => {
  const [products, setProducts] = useState({});
  console.log(props.category);
  useEffect(() => {
    const getProduct = async () => {
      try {
        if (props.category === "noCat") {
          const res = await publicRequest.get("/products/");
          setProducts(res.data);
        } else {
          const res = await publicRequest.get(
            "/products?category=" + props.category
          );
          setProducts(res.data);
        }
        // console.log(typeof res.data);
      } catch {}
    };
    getProduct();
  }, []);
  return (
    <Container>
      {Object.keys(products).map(
        (key) =>
          products[key].img.length !== 0 && <Product item={products[key]} />
      )}
    </Container>
  );
};

export default Products;
