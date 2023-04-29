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
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./css-styles/Product.css"

const Filler = styled.div`
  height: 10vh;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const Wrapper1 = styled.div`
  display: flex;
  /* flex: 1; */
  margin-right: 10vw;
  flex-direction: column;
  height: 80vh;
  width: 25vw;
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
  width: 50vw;
  height: 80vh;
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

const Comments = styled.div`
  border: 2px solid lightgray;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-weight: 500;
  padding: 5px;
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
    getProduct();
  }, [id]);

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
                    <img src={c} alt={c}/>
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
            <Button marginbelow style={{ color: "white" }}>
              Request Seller Contact
            </Button>
            <Button marginbelow style={{ color: "white" }}>
              Buy Item
            </Button>
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
          <Comments>
            <Link to="\Comments" style={{ color: "blue" }}>
              Comments
            </Link>
          </Comments>
        </Wrapper2>
      </Container>
      <Footer />
    </div>
  );
};

export default Product;
