import React, { useState, useContext } from "react";
import { BsFillPencilFill as Pencil } from "react-icons/bs";
import { TCard } from "../../types";
import { Flex, ModalCard, Button, BasicModal} from "../../components";
import styled from "styled-components";

type Props = {
  card: TCard;
};

export const Card: React.FC<Props> = ({ card }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  const disableModal = () => {
    setIsModalActive(false);
  }

  return (
    <>
      
          <CardBody justify="space-between" width="100%">
            <CardText>{` ${card.text}`}</CardText>
            <EditButton onClick={() => setIsModalActive(true)}>
              <Pen />
            </EditButton>
          </CardBody>

          {isModalActive && (
            <ModalCard disableModal={disableModal} cardProps={card} />
          )}

      
    </>
  );
}

const Pen = styled(Pencil)`
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
