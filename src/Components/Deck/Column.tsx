import { useState, useContext } from "react";
import { Context } from "../../utils/Context";
import styled from "styled-components";
import generateID from "../../utils/GenerateID";
import { Props } from "../../Types/Types";
import Flex from "../UI/Flex";
import Card from "./Card";

const Column: React.FC<Props> = ({ column: { title, id } }) => {
  const [input, setInput] = useState("");
  const { state, setState } = useContext(Context);
  const columns = state.columns;
  let currentColumnId: string = id;

  const addTask = () => {
    const newState = {
      ...state,
      cards: [...state.cards, { id: generateID(), text: input, columnId: id }],
    };
    if (input) {
      setState(newState);
      setInput("");
    } else {
      alert("Enter something!");
    }
  };

  const handleChangeCard = (e) => {
    setInput(e.target.value);
  };

  const handleChangeNewTitle = (e) => {
    let newTitle = e.target.value;
    let newState = {
      ...state,
      columns: columns.map((elem) => {
        if (elem.id === id) {
          elem.title = newTitle;
        }
        return elem;
      }),
    };
    setState(newState);
  };

  return (
    <>
      <CardContainer
        direction="column"
        justify="flex-start"
        align="center"
        gap="0.25rem"
        basis="17.1875rem"
      >
        <Title
          type="text"
          placeholder="Title!"
          value={title}
          name="text"
          onChange={handleChangeNewTitle}
        />
        <Input
          type="text"
          placeholder="Enter card title"
          value={input}
          name="text"
          onChange={handleChangeCard}
        />
        <Card currentColumnId={currentColumnId} />
        <Button onClick={addTask}>
          <ButtonText>Add card</ButtonText>
        </Button>
      </CardContainer>
    </>
  );
};

export default Column;

const Button = styled.button`
  border: none;
  min-width: 9.375rem;
  width: 100%;
  &:hover {
    filter: brightness(0.7);
  }
  box-shadow: 2px 2px 3px 0px rgba(34, 60, 80, 0.2);
  border-radius: 0.2rem;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 9.375rem;
  outline: none;
  border: none;

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
  background: 0;
  border-radius: 0.2rem;
`;

const ButtonText = styled.span`
  color: #7c818b;
`;

const CardContainer = styled(Flex)`
  padding: 0.3rem;
  border-radius: 0.2rem;
  background-color: hsl(227, 14%, 93%);
  height: fit-content;
`;

export const Title = styled(Input)`
  &::-webkit-input-placeholder {
    text-align: center;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }

  &:-ms-input-placeholder {
    text-align: center;
  }
  &[type="text"] {
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: rgb(78, 93, 119);
    padding: 0;
    text-align: center;
  }
  &:focus {
    outline: 1.5px solid black;
  }
`;
