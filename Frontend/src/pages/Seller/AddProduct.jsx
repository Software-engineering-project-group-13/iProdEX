import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
// import Button from "../../components/StyledComponents";
// import { Link } from "react-router-dom";
// import { Dropdown } from 'react-bootstrap/Dropdown';

const Filler = styled.div`
  height: 10vh;
  /* background-color: red; */
`;

const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  /* background-color: green; */
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 80%; */
  width: 50%;
  /* width: 30vw; */
  /* background-color: yellow; */
  padding-left: 10%;
  padding-top: 2%;
  /* height: 1vh; */
  padding-bottom: 1%;
  /* background-color: #eae3d2; */
`;

const List = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  /* background-color: green;  */
`;

const Input = styled.input`
  /* flex: 1; */
  width: 20vw;
  /* margin: 0px 5px 20px 0px; */
  padding: 10px;
  border-radius: 5px;
  border-color: white;
  border: none;
  box-shadow: 0px 0px 5px #ddd;
  font-family: "DynaPuff", cursive;
  font-weight: 500;
`;

const DescInput = styled.input`
  /* flex: 1; */
  width: 20vw;
  /* margin: 0px 5px 20px 0px; */
  padding: 10px;
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
  justify-content: space-between;
  padding: 3%;
  height: 7%;
`;

const DescInputid = styled.div`
  display: flex;
  margin: 1px;
  justify-content: space-between;
  padding: 3%;
  height: 20%;
`;

const Idname = styled.p`
  color: black;
  /* margin-bottom: 3px; */
  font-size: 16px;
  font-weight: 600;
  padding-top: 2%;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 750;
  /* margin: auto; */
  padding-left: 18%;
  margin-bottom: 25px;
  /* background-color: blueviolet; */
`;

const Box = styled.img`
  background-color: white;
  /* padding: 10px; */
  /* border-radius: 5px; */
  /* border-color: yellow; */
  border: none;
  /* margin: 10px; */
  /* box-shadow: 0px 0px 5px #ddd; */
  font-family: "DynaPuff", cursive;
  font-weight: 500;
  width: 30%;
  padding-left: 11%;
`;

const Image = styled.img`
  height: 50vh;
  object-fit: cover;
  border-radius: 10%;
  box-shadow: 0px 0px 5px #696969;
`;

const DropdownWrapper = styled.div`
  width: 21.5vw;
  height: 1vw;
  height: 6vh;
  /* margin-bottom: 10%; */
`;

const DropdownWrapper1 = styled.div`
  width: 21.5vw;
  height: 10vh;
  /* margin-bottom: 10%; */
`;

// const FormControl = styled.div``;
// const InputLabel = styled.div``;
// const NativeSelect = styled.div``;

const AddProducts = () => {
  const [category, setCategory] = useState({});
  const [prodname, setProdname] = useState({});
  const [desc, setDesc] = useState({});
  const [price, setPrice] = useState({});

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log({ category, prodname, desc, price });
  };

  return (
    <div>
      <Navbar />
      <Filler></Filler>
      <Container>
        <Wrapper>
          <Title> ADD PRODUCT DETAILS </Title>
          <List>
            <Inputid>
              <Idname>CATEGORY</Idname>
              <DropdownWrapper>
                <FormControl fullWidth size="small">
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-simple-select"
                    initialValue="age"
                    value={category}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Electronics"}>Electronics</MenuItem>
                    <MenuItem value={"Clothing"}>Clothing</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                  </Select>
                </FormControl>
              </DropdownWrapper>
            </Inputid>

            <Inputid>
              <Idname>PRODUCT NAME</Idname>
              <DropdownWrapper>
                <TextField
                  fullWidth
                  id="fullWidth"
                  size="small"
                  onChange={(e) => setProdname(e.target.value)}
                />
              </DropdownWrapper>
            </Inputid>

            <DescInputid>
              <Idname>DESCRIPTION</Idname>
              <DropdownWrapper1>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={3}
                  fullWidth
                  onChange={(e) => setDesc(e.target.value)}
                />
              </DropdownWrapper1>
            </DescInputid>

            <Inputid>
              <Idname>PRICE</Idname>
              <DropdownWrapper>
                <TextField
                  fullWidth
                  id="fullWidth"
                  size="small"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </DropdownWrapper>
            </Inputid>

            <Inputid>
              <Idname>UPLOAD IMAGES</Idname>
              <Button variant="contained" component="label" color="success">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Inputid>
          </List>
        </Wrapper>
        <Button variant="contained" color="success" onClick={handleClick}>
          Add Product
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default AddProducts;
