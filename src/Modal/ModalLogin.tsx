import styled from "styled-components";
import Flex from "../Flex";
import BasicModal from "./BasicModal";
// import { Title as Input } from "../Deck/Column";
import { Context } from "../utils/Context";
import { useContext, useState } from "react";

const ModalLogin = () => {
  const { state, setState } = useContext(Context);
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitModal = () => {
    const newState = {
      ...state,
      userName: input
    }
    setState(newState)
  }
  return (
    <BasicModal>
      <ModalContent justify="center" align="center" direction="column">
        <ModalH1>Your name is?</ModalH1>
        <ModalInput
          placeholder="Name"
          value={input}
          onChange={inputHandler}
        />
        <SubmitButton onClick={submitModal}>
          <SubmitButtonText>Submit</SubmitButtonText>
        </SubmitButton>
      </ModalContent>
    </BasicModal>
  );
};
export default ModalLogin;

export const ModalContent = styled(Flex)`
  background-color: #f4f5f7;
  border-radius: 0.1875rem;
`;
const ModalH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #475672;
  margin: 0;
  padding 0.5rem 3rem;
`;
const ModalInput = styled.input`
  width: 90%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  &:focus {
    outline: 0px solid black;
  }
  &::placeholder {
    text-align: start;
  }
  border-bottom: 1px black solid;
  border-radius: 0;
`;


export const SubmitButton = styled.button`
  background-color: rgb(94, 162, 215);
  text-decoration-line: none;
  cursor: pointer;
  height: 1.5rem;
  border-radius: 0.2rem;
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
  /* margin-top: 0.5rem; */
  margin-left: 4%;
  margin-bottom: 1rem;
  align-self: flex-start;
`;
export const SubmitButtonText = styled.span`
  color: #ffffff;
  font-size: 0.9rem;
`;
