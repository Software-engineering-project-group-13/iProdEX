import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #1e285e;
  margin-top: 50px;
`;

const C1 = styled.div`
  color: white;
  /* background-color: cyan; */
  flex: 1;
  /* margin-top: 50px; */
  padding: 20px;
`;
const C2 = styled.div`
  color: white;
  /* background-color: cyan; */
  flex: 1;
  /* margin-top: 50px; */
  padding: 20px;
`;
const C3 = styled.div`
  color: white;
  /* background-color: cyan; */
  flex: 1;
  /* margin-top: 50px; */
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 750;
  /* margin: auto; */
  margin-bottom: 30px;
`;

const Subhead = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Footer = () => {
  return (
    <Container>
      <C1>
        <Title>iProdEX</Title>
      </C1>
      <C2>
        <Subhead>Quick Links</Subhead>
        <List>
          <ListItem>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/favorites" style={{ color: "white" }}>
              Favorites
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/profile" style={{ color: "white" }}>
              MyProfile
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/FAQ" style={{ color: "white" }}>
              FAQs
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/register" style={{ color: "white" }}>
              Register
            </Link>
          </ListItem>
          {/* <ListItem>Home</ListItem> */}
        </List>
      </C2>
      <C3></C3>
    </Container>
  );
};

export default Footer;
