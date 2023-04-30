import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { userRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../components/StyledComponents";
import { mobile } from "../responsive";
const Container1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Filler = styled.div`
  height: 10vh;
  /* background-color: red; */
`;

const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  /* background-color: green; */

  ${mobile({ flexDirection: "column-reverse" })}
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  /* width: 60%; */
  /* background-color: yellow; */
  /* height: 1vh; */
`;

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  /* background-color: yellow; */
  align-items: center;
  justify-content: space-around;
`;

const List = styled.form`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  /* width: 150%; */
`;

const Input = styled.p`
  /* flex: 1; */
  width: 20vw;
  ${mobile({ width: "40vw" })}
  margin: 0px 5px 20px 0px;
  padding: 10px;
  padding-left: 10px;
  border-radius: 5px;
  border-color: white;
  border: none;
  box-shadow: 0px 0px 5px #ddd;
  font-family: "DynaPuff", cursive;
  font-weight: 500;
`;

const Inputid = styled.div`
  display: flex;
  margin: 1px;
  width: 100%;
  /* background-color: red; */
  /* align-items: center; */
  justify-content: space-between;
`;

const Idname = styled.p`
  color: black;
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 500;
  padding-top: 15px;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 750;
  /* margin: auto; */
  margin-bottom: 25px;
  /* background-color: blueviolet; */
`;

const Image = styled.img`
  height: 50vh;
  object-fit: cover;
  border-radius: 10%;
  box-shadow: 0px 0px 5px #696969;
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

const Profile = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await userRequest.get("/users/find/" + userId);
        //console.log(res.data);
        setProfile(res.data);
      } catch {}
    };
    getProfile();
  }, [userId]);
  return (
    <div>
      <Navbar />
      <Filler></Filler>
      <Container1>
        <Container>
          <Wrapper>
            <Title> PROFILE </Title>
            <List>
              <Inputid>
                <Idname>NAME</Idname>
                <Input>{profile.firstname}</Input>
              </Inputid>

              <Inputid>
                <Idname>USERNAME</Idname>
                <Input>{profile.username}</Input>
              </Inputid>

              <Inputid>
                <Idname>EMAIL</Idname>
                <Input>{profile.email}</Input>
              </Inputid>

              <Inputid>
                <Idname>ADDRESS</Idname>
                <Input>Hyderabad</Input>
              </Inputid>

              <Inputid>
                <Idname>MOBILE NO.</Idname>
                <Input>{profile.phonenumber}</Input>
              </Inputid>
            </List>
          </Wrapper>
          <Wrapper1>
            <Image src="https://th.bing.com/th/id/OIP.o2hpFnUg2tfIYjubSXiw7gHaKK?pid=ImgDet&rs=1"></Image>
            <Link to={"/editprofile/" + profile._id}>
              <Button1 profile style={{ color: "white" }}>
                Edit Profile
              </Button1>
            </Link>
          </Wrapper1>
        </Container>
      </Container1>
      <Footer />
    </div>
  );
};

export default Profile;
