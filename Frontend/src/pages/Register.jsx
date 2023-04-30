import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { signup } from "../redux/apiCalls";
import Button from "../components/StyledComponents";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";

const Filler = styled.div`
  height: 80px;
  ${mobile({ height: "160px" })}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 30%;
  ${mobile({ width: "70%" })}
  background-color: #f6f8fa;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
`;

const Wrapper1 = styled.div`
  margin-top: 20px;
  padding: 20px;
  width: 30%;
  ${mobile({ width: "80%" })}
  background-color: #f6f8fa;
  color: blue;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: 18px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 750;
  margin: auto;
  margin-bottom: 15px;
`;

const List = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* width: 150%; */
`;

const Input1 = styled.input`
  flex: 1;
  width: 13vw;
  ${mobile({ width: "28vw" })}
  margin: 0px 5px 10px 0px;
  padding: 10px;
  border-radius: 5px;
  border-color: white;
  border: none;
  box-shadow: 0px 0px 5px #ddd;
`;

const Input = styled.input`
  flex: 1;
  width: 28vw;
  margin: 0px 5px 20px 0px;
  padding: 10px;
  border-radius: 5px;
  border-color: white;
  border: none;
  box-shadow: 0px 0px 5px #ddd;
`;

const Inputid = styled.div`
  display: flex;
  margin: 0.5px;
  width: 20vw;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
`;

const Idname = styled.p`
  color: black;
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 500;
`;

const Middler = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  width: 30vw;
`;

const Middler1 = styled.div`
  display: flex;
  justify-content: center;
`;

const Register = () => {
  const [firstname, setFirstname] = useState({});
  const [lastname, setLastname] = useState({});
  const [username, setUsername] = useState({});
  const [email, setEmail] = useState({});
  const [phonenumber, setPhonenumber] = useState({});
  const [password, setPassword] = useState({});
  const [confirmpassword, setConfirmPassword] = useState({});

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    signup(dispatch, {
      firstname,
      lastname,
      username,
      email,
      phonenumber,
      password,
      confirmpassword,
    });
  };

  return (
    <div>
      <Navbar />
      <Filler></Filler>
      <Container>
        <Wrapper>
          <Middler>
            <Title> REGISTER </Title>
          </Middler>
          <List>
            <Middler>
              <Inputid>
                <Idname>First name</Idname>
                <Input1 onChange={(e) => setFirstname(e.target.value)} />
              </Inputid>
              <Inputid>
                <Idname>Last name</Idname>
                <Input1 onChange={(e) => setLastname(e.target.value)} />
              </Inputid>
            </Middler>
            <Inputid>
              <Idname>Username</Idname>
              <Input onChange={(e) => setUsername(e.target.value)} />
            </Inputid>

            <Inputid>
              <Idname>Institute email-id</Idname>
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Inputid>

            <Inputid>
              <Idname>Phone number</Idname>
              <Input onChange={(e) => setPhonenumber(e.target.value)} />
            </Inputid>

            <Inputid>
              <Idname>Password</Idname>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Inputid>

            <Inputid>
              <Idname>Confirm Password</Idname>
              <Input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Inputid>
          </List>
          <Middler1>
            <Link
              to="/neverification"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button style={{ color: "white" }} onClick={handleClick}>
                SIGNUP
              </Button>
            </Link>
          </Middler1>
        </Wrapper>
        <Wrapper1>
          Already have an account?&ensp;
          <Link to="/login" style={{ color: "blue" }}>
            Login
          </Link>
        </Wrapper1>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
