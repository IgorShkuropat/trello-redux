import { useState, useContext, FC, useEffect } from "react";
import styled from "styled-components";
import BasicModal from "./BasicModal";
import { Context } from "../utils/Context";
import {
  ModalContent,
  SubmitButton as SaveButton,
  SubmitButtonText as SaveButtonText,
} from "./ModalLogin";
import { IoClose } from "react-icons/io5";
import { BsCardHeading } from "react-icons/bs";
import { TModalCardProps } from "../Types/Types";
import Flex from "../Flex";
import { MdOutlineDescription } from "react-icons/md";

const ModalCard: FC<TModalCardProps> = ({
  cardProps: { text, id: cardId },
  toggleModal,
}) => {
  const { state, setState } = useContext(Context);
  const [titleInput, setTitleInput] = useState(text);
  const [descriptionText, setDescriptionText] = useState<string>("");
  const { cards, descriptions } = state;

  useEffect(() => {

 
    const currentDescription = descriptions ? descriptions.filter((elem) => elem.cardId === cardId) : ""
    console.log(descriptions);
    console.log(currentDescription);
   
    const newDescriptionText = currentDescription ? currentDescription[0] : "";
    console.log(typeof newDescriptionText);
    if (typeof newDescriptionText === "object" || newDescriptionText[0] !== undefined) {
      setDescriptionText(currentDescription[0].text);
    }
  }, []);

  const handleChangeNewTitle = (e) => {
    let newTitle = e.target.value;
    setTitleInput(newTitle);
  };
  const handleChangeNewDescription = (e) => {
    let newDescription = e.target.value;
    setDescriptionText(newDescription);
  };
  const saveData = () => {
    const newState = {
      ...state,
      cards: cards.map((elem) => {
        if (elem.id === cardId) {
          elem.text = titleInput;
        }
        return elem;
      }),
      descriptions: descriptions.map((elem) => {
        if (elem.cardId === cardId) {
          elem.text = descriptionText;
        }
        return elem;
      }),
    };
    setState(newState);
  };

  return (
    <BasicModal>
      <ModalContent align="flex-start" direction="column">
        <Flex justify="flex-start" align="center" width="100%">
          <InputIcon />
          <CardTitle value={titleInput} onChange={handleChangeNewTitle} />
          <CloseButton onClick={toggleModal} />
        </Flex>
        <Flex justify="flex-start" align="center" width="100%">
          <DescriptionIcon />
          <Flex direction="column">
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionTextarea
              placeholder="Card description"
              onChange={handleChangeNewDescription}
              value={descriptionText}
            />
          </Flex>
        </Flex>

        <SaveButton onClick={saveData}>
          <SaveButtonText>Save</SaveButtonText>
        </SaveButton>
      </ModalContent>
    </BasicModal>
  );
};

export default ModalCard;

const CloseButton = styled(IoClose)`
  border-radius: 50%;
  background-color: #f4f5f7;
  margin-top: 4%;
  width: 1rem;
  height: 1rem;
  border: 3px black;
  justify-self: flex-end;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    filter: brightness(0.85);
  }
`;
const CardTitle = styled.input`
  width: 75%;
  margin: 0.5rem 1%;
  &:focus {
    outline: 1px solid black;
    background-color: #ffffff;
  }
  &::placeholder {
    text-align: start;
  }
  border-radius: 2px;
  border: 0;
  color: #172b4d;
  font-weight: 700;
  background-color: #f4f5f7;
`;
const InputIcon = styled(BsCardHeading)`
  margin-left: 4%;
  color: #172b4d;
`;
const DescriptionTitle = styled.h2`
  margin: 0;
  align-self: flex-start;
  color: #172b4d;
  font-size: 0.75rem; ;
`;

const DescriptionIcon = styled(MdOutlineDescription)`
  color: #172b4d;
  align-self: flex-start;
  margin-left: 4%;
`;

const DescriptionTextarea = styled.textarea`
  width: 75%;
  margin: 0;
  margin-bottom: 4%;
  margin-top: 1%;
  align-self: flex-start;
  color: #172b4d;
  font-size: 0.75rem;
  border-radius: 0.1875rem;
  resize: none;
  &[type="text"] {
    font-family: Roboto, sans-serif;
    font-size: 0.7rem;
    color: #7c818b;
    padding: 0;
  }
`;

const CommentariesTitle = styled(CardTitle)``;
const CommentariesText = styled.textarea``;
