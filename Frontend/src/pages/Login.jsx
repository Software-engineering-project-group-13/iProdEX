import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { login } from "../redux/apiCalls";
import Button from "../components/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container1 = styled.div`
  width: 97%;
  padding: 3px;
  /* padding-right: 50px; */
  display: flex;
  justify-content: space-between;
  background-color: #f6f8fa;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 30%;
  background-color: #f6f8fa;
  /* background-color: lightcyan; */
  border-radius: 10px;
  flex-direction: column;
`;

const Wrapper1 = styled.div`
  margin-top: 20px;
  padding: 20px;
  width: 30%;
  background-color: #f6f8fa;
  /* background-color: lightcyan; */
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
  margin: 1px;
  width: 100%;
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

const Idname1 = styled(Link)`
  color: blue;
  font-size: 15px;
  font-weight: 500;
  text-align: right;
`;

const Middler = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;
`;

const Middler1 = styled.div`
  display: flex;
  justify-content: center;
`;

const Login = () => {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          {error && (
            <Collapse in={open}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                please enter valid credentials
              </Alert>
            </Collapse>
          )}
          <Middler>
            <Title> LOGIN </Title>
          </Middler>
          <List>
            <Inputid>
              <Idname>Username/Institute email-id</Idname>
              <Input onChange={(e) => setUsername(e.target.value)} />
            </Inputid>

            <Inputid>
              <Container1>
                <Idname>Password</Idname>{" "}
                <Idname1 to="/resetpassword">Forgot Password?</Idname1>
              </Container1>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Inputid>
          </List>
          <Middler1>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Button
                style={{ color: "white" }}
                onClick={handleClick}
                disabled={isFetching}
              >
                LOGIN
              </Button>
            </Link>
          </Middler1>
        </Wrapper>
        <Wrapper1>
          Don't have an account?&ensp;
          <Link to="/register" style={{ color: "blue" }}>
            Register
          </Link>
        </Wrapper1>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
