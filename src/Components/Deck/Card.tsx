import { useContext, useState} from "react";
import { Context } from "../../utils/Context";
import { BsFillPencilFill as Pencil } from "react-icons/bs";
import styled from "styled-components";
import { PencilType, TCardProps, TCard } from "../../Types/Types";
import Flex from "../UI/Flex";
import React from "react";
import ModalCard from "../../Modal/ModalCard";

const Card: React.FC<TCardProps> = ({ currentColumnId }) => {
  const { state, setState } = useContext(Context);
  const { cards } = state;
  const [modalActive, setModalActive] = useState(false);
  const [cardProps, setCardProps] = useState<TCard>(null!);

  const toggleModal = () => {
    setModalActive((prev) => !prev);
  };



  return (
    <>
      {cards.map((card) => {
        return (
          <React.Fragment key={card.id}>
            {currentColumnId === card.columnId && (
              <CardBody
                
                justify="space-between"
                width="100%"
                
              >
                <CardText>{` ${card.text}`}</CardText>
                <EditButton onClick={() => (toggleModal(), setCardProps(card))}>
                  <Pen/>
                </EditButton>
              </CardBody>
            )}
          </React.Fragment>
        );
      })}
      {modalActive && (
        <ModalCard toggleModal={toggleModal} cardProps={cardProps} />
      )}
    </>
  );
};

export default Card;

const Pen = styled(Pencil)<PencilType>`
  display: block;
  width: 1rem;
  height: 1rem;
  color: grey;
`;

const EditButton = styled.button`
  padding: 0.1rem;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 0.1rem;
  &:hover {
    filter: brightness(0.87);
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

`;

const CardText = styled.span`
padding-left: 8px;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
`;
