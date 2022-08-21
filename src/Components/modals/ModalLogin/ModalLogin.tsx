import styled from "styled-components";
import { Flex, BasicModal, Button } from "../../../components";
import { Context } from "../../../redux/store/Context";
import { useContext, useState } from "react";

export const ModalLogin = () => {
  const { state, setState } = useContext(Context);
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitModal = () => {
    const newState = {
      ...state,
      userName: input,
    };
    setState(newState);
  };
  return (
    <BasicModal>
      <ModalContent justify="center" alignSelf="center" direction="column" gap="8px">
        <ModalH1>Your name is?</ModalH1>
        <Flex direction="column" alignSelf="center">
          <ModalInput
            placeholder="Name"
            value={input}
            onChange={inputHandler}
          />
          <Button onClick={submitModal} margin="12px 0">Submit</Button>
        </Flex>
      </ModalContent>
    </BasicModal>
  );
};

export const ModalContent = styled(Flex)`
  background-color: #f4f5f7;
  border-radius: 0.1875rem;
`;
const ModalH1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #475672;
  margin: 0;
  padding: 0.5rem 3rem;
`;
const ModalInput = styled.input`
  width: 90%;
  &:focus {
    outline: 0px solid black;
  }
  &::placeholder {
    text-align: start;
  }
  border-bottom: 1px black solid;
  border-radius: 0;
`;
