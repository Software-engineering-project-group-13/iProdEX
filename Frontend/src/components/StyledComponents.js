import styled from "styled-components";

const Button = styled.button`
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
  width: 20vw;
  font-weight: 700;
  box-shadow: 0px 0px 5px #696969;

  width: ${(props) => (props.profile ? "18vw" : "20vw")};
  width: ${(props) => (props.popup ? "10vw" : "20vw")};
  margin-bottom: ${(props) => (props.marginbelow ? "20px" : "10px")};

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`;

export default Button;
