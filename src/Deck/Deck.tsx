import { useState, useContext } from "react";
import { Context } from "../utils/Context";
import generateID from "../utils/GenerateID";
import styled from "styled-components";
import Flex from "../Flex";
import Column from "./Column";
import { AiOutlinePlus } from "react-icons/ai";
import ModalCard from "../Modal/ModalCard";

const Deck = () => {
  const { state, setState } = useContext(Context);

  const [title, setTitle] = useState("");
  const { columns } = state;

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const addColumn = () => {
    if (title) {
      const newState = {
        ...state,
        columns: [...columns, { title, id: generateID() }],
      };

      setState(newState);
      setTitle("");
    } else {
      alert("Enter something!");
    }
    console.log(title);
  };

  return (
    <Wrapper>
      <Flex justify="center" gap="0.5rem" wrap="wrap" basis="17.1875rem">
        {columns.map((column) => {
          return <Column key={column.id} column={column} />;
        })}
        <AddButtonContainer>
          <AddButton onClick={addColumn}>
            <Flex justify="center" align="center">
              <Plus />
              <AddButtonText>Add column</AddButtonText>
            </Flex>
          </AddButton>
          <AddButtonInput value={title} onChange={handleChangeTitle} />
        </AddButtonContainer>
      </Flex>
    </Wrapper>
  );
};

export default Deck;

const Wrapper = styled.div`
  max-width: 95%;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const AddButton = styled.button`
  background-color: rgb(94, 162, 215);
  text-decoration-line: none;
  cursor: pointer;
  height: 2.5625rem;
  border: 0;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  &:hover {
    filter: brightness(0.9);
  }
`;
const AddButtonText = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #fff;
`;
const AddButtonContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
const AddButtonInput = styled.input`
  &::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &::-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &:-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &:-ms-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &[type="text"] {
    font-family: Roboto, sans-serif;
    font-size: 0.7rem;
    color: #7c818b;
    padding: 0;
  }
  background: #fff;
  border: 0;
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  outline: none;
`;

const Plus = styled(AiOutlinePlus)`
  display: inline;
  width: 1rem;
  height: 1rem;
  color: white;
  vertical-align: center;
`;
