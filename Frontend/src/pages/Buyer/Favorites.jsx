import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/StyledComponents";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { publicRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Filler = styled.div`
  height: 15vh;
`;

const Divider = styled.hr`
  background-color: lightgray;
  width: 100%;
  height: 3px;
  border: none;
`;

const Heading = styled.h1`
  text-align: center;
  height: 10vh;
`;
const TableHeading = styled.div`
  margin: 0.5%;
  display: flex;
`;

const ItemHeading = styled.div`
  /* text-align: center; */
  padding-left: 5%;
  width: 50%;
  font-weight: 600;
  font-size: large;
`;

const PriceHeading = styled.div`
  width: 25%;
  font-weight: 600;
  font-size: large;
  /* text-align  : center; */
  padding-left: 7%;
`;

const Container = styled.div`
  width: 100vw;
  /* height: 150vh; */
  justify-content: center;
`;

const Item = styled.div`
  height: 12vw;
  background-color: #ecf0f1;
  width: 100%;
  display: flex;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  padding-left: 2%;
  &:hover {
    filter: brightness(0.9);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  padding: 10px;
`;

const Image = styled.img`
  height: 20vh;
  /* width : 130px; */
  /* width: 20vw; */
  align-items: left;
  /* background-color: lightgoldenrodyellow; */

  /* padding-bottom: 20px;
  object-fit: cover; */
  /* z-index: 2; */
  /* box-shadow: 0px 0px 5px #696969; */
`;

const ProdName = styled.div`
  font-size: larger;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: 10px;
  /* background-color: lightblue; */
`;

const ProdCategory = styled.div`
  font-size: medium;
  font-weight: 300;
  display: flex;
`;

const ProdArrCategory = styled.div`
  display: flex;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
  font-weight: 600;
  margin: 10px;
  text-align: center;
  /* background-color: lightcyan; */
  height: 85%;
  width: 35%;
`;

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecf0f1;
  border: none;
  padding-bottom: 4%;
  width: 10%;
`;

const GetProductFromArr = (productId) => {
  // console.log(productId);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        // console.log(productId.productId);
        const res = await publicRequest.get(
          "/products/find/" + productId.productId
        );
        // console.log(res.data);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [productId.productId]);

  // if (Object.keys(product).length !== 0) console.log(product);
  const handleClick = () => {};
  return (
    <>
      {Object.keys(product).length !== 0 && (
        <Item>
          <ImageWrapper>
            <Image src={product.img[0]} />
          </ImageWrapper>
          <ProdName>
            {product.title}
            <ProdArrCategory>
              {product.categories?.map((c) => (
                <ProdCategory>
                  {c}
                  <p>&ensp;</p>
                </ProdCategory>
              ))}
            </ProdArrCategory>
          </ProdName>
          <PriceContainer>{product.price}</PriceContainer>
          <ButtonWrapper>
            <Link
              to={"/product/" + product._id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button>Product Details</Button>
            </Link>
          </ButtonWrapper>
        </Item>
      )}
    </>
  );
};

const Favorites = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const [favorites, setFavorite] = useState({});
  useEffect(() => {
    const getfavorites = async () => {
      try {
        const res = await publicRequest.get("/favorites/find/" + userId);
        // console.log(res.data);
        setFavorite(res.data);
      } catch {}
    };
    getfavorites();
  }, [userId]);

  return (
    <div>
      <Navbar />
      <Filler></Filler>
      <Heading>Your Favorites</Heading>
      <TableHeading>
        <ItemHeading>Item</ItemHeading>
        <PriceHeading>Price</PriceHeading>
      </TableHeading>
      <Container>
        <Divider />
        {favorites.products?.map((product) => (
          <GetProductFromArr productId={product} />
        ))}
      </Container>
      <Footer />
    </div>
  );
};
export default Favorites;
