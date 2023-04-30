import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { addfavorite } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { useRef } from "react";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  border-radius: 15px;
`;

const Container = styled.div`
  flex: 1;
  margin: 15px;
  /* padding: 10%; */
  min-width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #cccfd0;
  position: relative;
  border-radius: 15px;
  background-image: radial-gradient(#1e285e 100px, #f6f8fa);
  /* background-image: linear-gradient(to bottom right, #1e285e, #f6f8fa); */
  &:hover ${Info} {
    opacity: 1;
  }
`;

const ProductName = styled.h2`
  padding-top: 10px;
  font-family: "Hind", sans-serif;
  font-weight: 600;
  font-size: 22px;
`;

const Image = styled.img`
  height: 80%;
  width: 85%;
  object-fit: contain;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #3547af;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);

  const [favorites, setFavorite] = useState({});

  const dispatch = useDispatch();
  let user_id;
  if (user) user_id = user._id;
  const productId = item._id;

  const [button, setButton] = useState(false);

  let v = 0;

  const handleFavorite = (e) => {
    // setButton(true);
    e.preventDefault();

    console.log(Object.keys(favorites).length);

    for (let i = 0; i < Object.keys(favorites).length; ++i) {
      if (favorites[i] === productId) {
        v = v + 1;
      }
    }

    console.log(v);
    if (v === 0) {
      addfavorite(dispatch, user_id, { productId });
      // favorites.push(productId);
      setFavorite([...favorites, productId]);
    }
    v = 0;
    // setButton(false);
  };

  return (
    <Container>
      <Image src={item.img[0]} />
      <Info>
        {user && (
          <Icon disabled={button} onClick={handleFavorite}>
            <FavoriteBorderIcon />
          </Icon>
        )}
        <Link
          to={"/product/" + item._id}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Icon>
            <OpenInFullIcon />
          </Icon>
        </Link>
      </Info>
      <ProductName>{item.title}</ProductName>
    </Container>
  );
};

export default Product;
