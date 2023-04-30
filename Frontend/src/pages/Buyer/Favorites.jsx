import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/StyledComponents";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { publicRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefavorite } from "../../redux/apiCalls";

const Filler = styled.div`
  height: 15vh;
`;

const Filler2 = styled.div`
  height: 50vh;
`;

const Divider = styled.hr`
  background-color: lightgray;
  width: 102%;
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
  width: 48%;
  font-weight: 700;
  font-size: large;
`;

const PriceHeading = styled.div`
  width: 25%;
  font-weight: 700;
  font-size: large;
  /* text-align  : center; */
  /* padding-left: 7%; */
`;

const Container = styled.div`
  width: 96vw;
  /* height: 150vh; */
  justify-content: center;
`;

const Item = styled.div`
  height: 12vw;
  background-color: #EAE3D2;
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
  /* background-color: yellow; */
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
  width: 20%;
`;

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EAE3D2;
  border: none;
  padding-bottom: 4%;
  padding-top: 4%;
  width: 20%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* background-color: whitesmoke; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    /* background-color: whitesmoke; */
    transform: scale(1.1);
    filter: brightness(1.2);
    cursor: pointer;
  }
`;

const RemoveFromFavorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93%;
  padding-left: 5%;
`;

const GetProductFromArr = (product_Id, user_id) => {
  const user = useSelector((state) => state.user.currentUser);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(
          "/products/find/" + product_Id.productId
        );
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [product_Id.productId]);

  const productId = product_Id.productId;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    removefavorite(dispatch, user._id, { productId });
  };

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
          <RemoveFromFavorites>
            <Icon onClick={handleClick}>
              <RemoveCircleOutlineIcon />
            </Icon>
          </RemoveFromFavorites>
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
        console.log(userId);
        setFavorite(res.data);
      } catch {}
    };
    getfavorites();
  }, []);

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
        {favorites &&
          favorites.products?.map((product) => (
            <GetProductFromArr productId={product} user_id={userId} />
          ))}
        {!favorites && <Filler2 />}
      </Container>
      <Footer />
    </div>
  );
};
export default Favorites;
