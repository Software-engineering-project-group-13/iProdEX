import { HomeOutlined, Search } from "@material-ui/icons";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50px;
  background-color: #1e285e;
  width: 100%;
  position: fixed;
  z-index: 5;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-top: 8px;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px", justifyContent: "space-around" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  /* width: 50%; */
  align-items: center;
  /* ${mobile({ width: "140%" })} */
  /* padding: 1px; */
  /* background-color: red; */
  /* overflow: hidden; */
  justify-content: space-around;
`;

// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;
//     display: flex;
// `

const HomeButtonContainer = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e2e2e2;
  border-radius: 5px;
  width: 100%;
  height: 2rem;
  padding: 0 5px;
  box-shadow: 0px 0px 5px #ddd;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 1rem;
  ::placeholder {
    color: grey;
  }
  margin-left: 5px;
  :focus {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  align-items: flex-start;
  ${mobile({ flex: "none" })}/* background-color: green; */
`;

const Right = styled.div`
  flex: 0;
  display: flex;
  padding-right: 10px;
  /* background-color: yellow; */
`;

const FavoriteOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 10px;
`;

const ProfileOption = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: white; */
  background-color: #1e285e;
  padding: 0 10px;
  transition: filter 300ms;
  border: none;
  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  width: 150px;
  transition: 1000ms;
  transform: ${(props) =>
    props.login ? "translateX(-15%)" : "translateX(-78%)"};
  background-color: #1e285e;
  border-color: green;
  border-width: 100px;
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
`;

const MenuItemContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: white;

  transition: background 500ms;
  padding: 0.5rem;

  &:hover {
    background-color: #3547af;
  }
`;

const Menudata = styled.p`
  color: white;
  padding-left: 10px;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logout(dispatch);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <HomeButtonContainer>
              <HomeOutlined style={{ color: "white", fontSize: 30 }} />
            </HomeButtonContainer>
          </Link>
          <SearchContainer>
            <Search style={{ color: "#1e285e" }} />
            <Input placeholder="Search" />
          </SearchContainer>
        </Left>
        <Center></Center>
        <Right>
          {user && (
            <FavoriteOption>
              <p>
                <Link
                  to={"/favorites/" + user._id}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FavoriteBorderIcon
                    style={{ color: "white", fontSize: 27 }}
                  />
                </Link>
              </p>
            </FavoriteOption>
          )}
          <ProfileOption onClick={() => setOpen(!open)}>
            <AccountCircle style={{ color: "white", fontSize: 30 }} />
          </ProfileOption>

          {open &&
            (user ? (
              <Dropdown login>
                <Link
                  to={"/profile/" + user._id}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItemContainer>
                    <PersonIcon />
                    <Menudata>View Profile</Menudata>
                  </MenuItemContainer>
                </Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={logoutHandler}
                >
                  <MenuItemContainer>
                    <LogoutIcon />
                    <Menudata>Logout</Menudata>
                  </MenuItemContainer>
                </Link>
              </Dropdown>
            ) : (
              <Dropdown>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItemContainer>
                    <LoginIcon />
                    <Menudata>Login</Menudata>
                  </MenuItemContainer>
                </Link>
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <MenuItemContainer>
                    <AppRegistrationIcon />
                    <Menudata>register</Menudata>
                  </MenuItemContainer>
                </Link>
              </Dropdown>
            ))}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
