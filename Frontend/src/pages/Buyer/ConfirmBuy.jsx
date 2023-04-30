import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { ArrowRightOutlined } from '@material-ui/icons';

const Filler = styled.div`
  height: 10vh;
  /* background-color: red; */
`;

const Container = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  /* background-color: green; */
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 30%;
  /* padding-left: 10%;
  padding-top: 10%; */
  padding-bottom: 6%;
  margin: 6%;
  /* background-color: yellow; */
  align-items: center;
  justify-content: space-around;
  background-color: lightgrey;
`;

const ContentBox = styled.p`

  height: 20%;
  width: 40%;
  border: 3px solid black;
  display: flex;
  font-family: "DynaPuff", cursive;
  justify-content: space-around;
  border-color: lightgray;
  box-shadow: 0px 0px 5px #ddd;
  font-weight: 500;   
  border-radius: 5px;
  /* background-color: grey; */
`

const Content1 = styled.p`
    display: flex;
    align-items: center;
`

const Content2 = styled.p`
  align-items: center;
  display: flex;
  font-family: "DynaPuff", cursive;
`

const ConfirmBuy = () => { 

  return (
    <div>
      <Navbar />
      <Filler></Filler>
      <Container>
        <Wrapper>
            <ContentBox>
                <Content1>OTP</Content1>
            </ContentBox>
            <Content2>Confirm Buy from Seller</Content2>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default ConfirmBuy;
