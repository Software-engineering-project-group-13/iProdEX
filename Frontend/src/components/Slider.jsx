import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import React, { useState } from "react";
import { sliderItems, sliderItems2 } from "../slidesdata";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Filler = styled.div`
  height: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  /* background-color: blue; */
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    background-color: #c4c1c1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${mobile({ display: "none" })}
`;

const Wrapper1 = styled.div`
  height: 100%;
  display: none;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${mobile({ display: "flex" })}
`;

const Slide = styled.button`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
  margin: 0%;
  padding: 0%;
  &:hover {
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Filler />
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Link to={"/searchresults/" + item.category}>
              <Slide key={item.id}>
                <ImgContainer>
                  <Image src={item.img} alt="computer" />
                </ImgContainer>
              </Slide>
            </Link>
          ))}
        </Wrapper>
        <Wrapper1 slideIndex={slideIndex}>
          {sliderItems2.map((item) => (
            <Slide key={item.id}>
              <ImgContainer>
                <Image src={item.img} alt="computer" />
              </ImgContainer>
            </Slide>
          ))}
        </Wrapper1>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
