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
// import Button from "../../components/StyledComponents";
// import { Link } from "react-router-dom";
// import { Dropdown } from 'react-bootstrap/Dropdown';

const Filler = styled.div`
  height: 10vh;
  /* background-color: red; */
`;

const Container = styled.div`
  width: 100vw;
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

// const FormControl = styled.div``;
// const InputLabel = styled.div``;
// const NativeSelect = styled.div``;

const AddProducts = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    initialValue="age"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Electronics</MenuItem>
                    <MenuItem value={20}>Clothing</MenuItem>
                    <MenuItem value={30}>Others</MenuItem>
                  </Select>
                </FormControl>
              </DropdownWrapper>
            </Inputid>

            <Inputid>
              <Idname>PRODUCT NAME</Idname>
              <Input></Input>
            </Inputid>

            <DescInputid>
              <Idname>DESCRIPTION</Idname>
              <DescInput></DescInput>
            </DescInputid>

            <Inputid>
              <Idname>PRICE</Idname>
              <Input></Input>
            </Inputid>

            <Inputid>
              <Idname>UPLOAD IMAGES</Idname>
              <Box></Box>
              <Button variant="contained" component="label" color="success">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Inputid>
          </List>
        </Wrapper>
        <Button variant="contained" color="success">
          Add Product
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default AddProducts;
