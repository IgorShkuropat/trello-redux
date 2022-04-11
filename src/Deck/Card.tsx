import { useContext, useState} from "react";
import { Context } from "../utils/Context";
import { BsFillPencilFill as Pencil } from "react-icons/bs";
import styled from "styled-components";
import { PencilType, TCardProps, TCard } from "../Types/Types";
import Flex from "../Flex";
import React from "react";
import ModalCard from "../Modal/ModalCard";

const Card: React.FC<TCardProps> = ({ currentColumnId }) => {
  const { state, setState } = useContext(Context);
  const { cards } = state;
  const [modalActive, setModalActive] = useState(false);
  const [cardProps, setCardProps] = useState<TCard>(null!);

  const toggleModalCard = () => {
    setModalActive((prev) => !prev);
  };

  const removeTask = (cardId: string): void => {
    let filtredCards = {
      ...state,
      cards: cards.filter((cards) => !(cards.id === cardId)),
    };
    setState(filtredCards);
  };

  return (
    <>
      {cards.map((card) => {
        return (
          <>
            {currentColumnId === card.columnId && (
              <CardBody
                onClick={() => (toggleModalCard(), setCardProps(card))}
                justify="space-between"
                width="100%"
                key={card.id}
              >
                <CardText>{` ${card.text}`}</CardText>
                <DeleteButton onClick={() => removeTask(card.id)}>
                  <Pen hover />
                </DeleteButton>
              </CardBody>
            )}
          </>
        );
      })}
      {modalActive && (
        <ModalCard toggleModal={toggleModalCard} cardProps={cardProps} />
      )}
    </>
  );
};

export default Card;

const Pen = styled(Pencil)<PencilType>`
  display: ${(p) => (p.hover ? "block" : "none")};
  width: 1rem;
  height: 1rem;
  color: grey;
`;

const DeleteButton = styled.button`
  padding: 0.1rem;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 0.1rem;
  &:hover {
    filter: brightness(0.9);
  }
`;

const CardBody = styled(Flex)`
  margin: 0;
  font-size: 0.7rem;
  color: #7c818b;
  background-color: #ffffff;
  width: 100%;
  height: auto;
  box-shadow: 2px 1px 3px 0px rgba(34, 60, 80, 0.2);
  &:hover {
    filter: brightness(0.87);
  }
`;

const CardText = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 1rem;
`;
