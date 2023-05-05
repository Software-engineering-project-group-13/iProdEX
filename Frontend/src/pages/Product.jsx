import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/StyledComponents";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import {
  PostComment,
  PostRequest,
  addfavorite,
  removefavorite,
} from "../redux/apiCalls";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./css-styles/Product.css";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
// import Button from "../components/StyledComponents";

const Filler = styled.div`
  height: 10vh;
`;

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  ${mobile({ flexDirection: "column" })}
`;

const Wrapper1 = styled.div`
  display: flex;
  /* flex: 1; */
  margin-right: 10vw;
  flex-direction: column;
  ${mobile({ flexDirection: "column" })}
  height: 80vh;
  width: 50vw;
  ${mobile({ width: "100%" })}
  align-items: center;
  justify-content: space-around;
  /* background-color: lightgray; */
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 50vh;
  margin-top: 45px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin: 5px;
  /* min-width: 280px; */
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* background-color: whitesmoke; */
  /* &:hover ${Info} {
    opacity: 1;
  } */
`;

// const Image = styled.img`
//   height: 50vh;
//   /* padding-bottom: 20px;
//   object-fit: cover; */
//   z-index: 2;
//   /* box-shadow: 0px 0px 5px #696969; */
// `;

// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: pink;
//     transform: scale(1.1);
//     cursor: pointer;
//   }
// `;

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: none;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* background-color: yellow; */
  width: 100%;
  padding-left: 20px;
  /* height: 80vh; */
  margin-top: 20px;
  /* margin-right: 27vw; */
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const DescId = styled.h3`
  display: flex;
  justify-content: left;
`;

const DescContent = styled.p`
  display: flex;
  justify-content: left;
  font-family: "DynaPuff", cursive;
`;

const DescContentArray = styled.div`
  display: flex;
  justify-content: left;
  font-family: "DynaPuff", cursive;
`;

const Divider = styled.hr`
  background-color: lightgray;
  width: 100%;
  height: 3px;
  border: none;
`;

const CommentsContainer = styled.div`
  width: 100%;
`;

const Comments = styled.div`
  border: 2px solid lightgray;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-weight: 500;
  padding: 5px 0px 5px 0px;
  background-color: #0e1832;
  color: white;
  border-radius: 5px;
  width: 98%;
`;

const Button1 = styled.button`
  border: none;
  padding: 12px 20px;
  background-color: #00bf63;
  margin: auto;
  /* margin-top: 20px; */
  border-radius: 5px;
  :hover {
    background-color: #00964d;
    cursor: pointer;
  }
  width: 40vw;
  font-weight: 700;
  box-shadow: 0px 0px 5px #696969;

  width: ${(props) => (props.profile ? "18vw" : "20vw")};
  ${mobile({ width: "40vw" })}
  ${mobile({ margin: "10px" })}
  margin-bottom: ${(props) => (props.marginbelow ? "20px" : "10px")};

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;
const Typer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  height: 10%;
  border: none;
  margin-top: 5px;
`;

const Inpbox = styled.input`
  width: 78%;
  border-radius: 5px;
`;

const Submitbutton = styled.button`
  width: 20%;
  background-color: #00bf63;
  border-radius: 5px;
  border: none;

  /* border-color: white; */
  box-shadow: 0px 0px 5px #696969;
  &:hover {
    cursor: pointer;
  }
`;

const Passed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  width: 98%;
  height: 40vh;
  overflow: scroll;
  border-width: 10px;
  border-color: black;
`;

const Single = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  box-shadow: 0px 0px 5px #ddd;

  /* overflow: unset; */
  /* flex-direction: column; */
  /* background-color: blue; */
  margin-top: 10px;
  border-radius: 5px;
  align-items: center;
  border: none;

  /* background-color: ; */
  /* height: 20px; */
`;

const Typerid = styled.text`
  height: 70%;
  /* padding-left: 20px; */
  padding-top: 5px;
  font-size: 110%;
  font-weight: 600;
  background-color: #eae3d2;
  border-radius: 5px;
  width: 15%;
  display: flex;
  justify-content: space-around;
`;

const Passedcomment = styled.text`
  width: 100%;
  background-color: whitesmoke;
  border-radius: 5px;
  margin-left: 1%;
  padding-left: 7px;
  padding-bottom: 5px;
  padding-top: 5px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        // console.log(res.data);
        setProduct(res.data);
      } catch {}
    };
    const intervalId = setInterval(() => {
      getProduct();
    }, 500);
    return () => clearInterval(intervalId);
  }, [id]);

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  let user_id;
  if (user) user_id = user._id;
  const productId = product._id;
  // console.log(user);
  const [FavoriteText, setFavoriteText] = useState("Add To Favorites");

  const [favorites, setFavorite] = useState({});
  useEffect(() => {
    const getfavorites = async () => {
      try {
        const res = await publicRequest.get("/favorites/find/" + user._id);
        // console.log(res.data);
        setFavorite(res.data);
      } catch {}
    };
    getfavorites();
  }, []);

  const handleFavorite = (e) => {
    e.preventDefault();
    if (user) {
      if (FavoriteText === "Add To Favorites") {
        addfavorite(dispatch, user_id, { productId });
        setFavoriteText("Remove From Favorites");
      } else if (FavoriteText === "Remove From Favorites") {
        removefavorite(dispatch, user_id, { productId });
        setFavoriteText("Add To Favorites");
      }
    }
  };

  const [comments, setComments] = useState({});

  const handleComment = (e) => {
    e.preventDefault();
    PostComment(dispatch, productId, {
      username: user.username,
      text: comments,
    });
  };

  const RequestSeller = (e) => {
    e.preventDefault();
    PostRequest(dispatch, productId, {
      username: user.username,
      status: false,
    });
  };

  return (
    <div>
      <Navbar />
      <Filler></Filler>
      <Container>
        <Wrapper1>
          <ImageWrapper>
            {/* <Image src={product.img} /> */}
            <sliderWrapper>
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
              >
                {product.img?.map((c) => (
                  <SwiperSlide>
                    <img src={c} alt={c} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </sliderWrapper>
            {/* <Info>
              <Icon>
                <FavoriteBorderIcon />
              </Icon>
            </Info> */}
          </ImageWrapper>
          <ButtonWrapper>
            {!user && (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button marginbelow style={{ color: "white" }}>
                  {FavoriteText}
                </Button>
              </Link>
            )}
            {user && (
              <Button
                marginbelow
                style={{ color: "white" }}
                onClick={handleFavorite}
              >
                {FavoriteText}
              </Button>
            )}
            {user && (
              <div>
                <Button1
                  marginbelow
                  style={{ color: "white" }}
                  onClick={RequestSeller}
                >
                  Request Seller Contact
                </Button1>
              </div>
            )}
          </ButtonWrapper>
        </Wrapper1>
        <Wrapper2>
          <Description>
            <DescId>Product</DescId>
            <DescContent>{product.title}</DescContent>
          </Description>
          <Divider />
          <Description>
            <DescId>Company</DescId>
            <DescContent>{product.company}</DescContent>
          </Description>
          <Divider />
          <Description>
            <DescId>Categeory</DescId>
            <DescContentArray>
              {product.categories?.map((c) => (
                <DescContent>
                  {c}
                  <p>&ensp;</p>
                </DescContent>
              ))}
            </DescContentArray>
          </Description>
          <Divider />
          <Description>
            <DescId>Size</DescId>
            <DescContent>{product.size}</DescContent>
          </Description>
          <Divider />
          <Description>
            <DescId>Age</DescId>
            <DescContent>{product.age}</DescContent>
          </Description>
          <Divider />
          <Description>
            <DescId>Product Details</DescId>
            <DescContent>{product.desc}</DescContent>
          </Description>
          <Divider />
          <Description>
            <DescId>Price</DescId>
            <DescContent>{product.price}</DescContent>
          </Description>
          <Divider />
          {user && (
            <CommentsContainer>
              <Comments>Comments</Comments>
              <Typer>
                <Inpbox onChange={(e) => setComments(e.target.value)} />
                <Submitbutton onClick={handleComment}> Post </Submitbutton>
              </Typer>
              <Passed>
                {product.comments?.map((c) => (
                  <Single>
                    <Typerid>{c.username}</Typerid>
                    <Passedcomment> {c.text} </Passedcomment>
                  </Single>
                ))}
              </Passed>
            </CommentsContainer>
          )}
        </Wrapper2>
      </Container>
      <Footer />
    </div>
  );
};

export default Product;
