import React, { useState, useEffect, useContext, FC } from "react";
import { Context } from "../../../store/Context";
import { Flex } from "../../../components";
import { MdOutlineDescription } from "react-icons/md";
import styled from "styled-components";

type Props = {
  cardId: string;
};

export const ModalCardDescription: FC<Props> = ({ cardId }) => {
  const { state, setState } = useContext(Context);
  const { cards } = state;
  const [descriptionText, setDescriptionText] = useState("");

  useEffect(() => {
    const description =
      cards.find((card) => card.id === cardId)?.description || "";

    setDescriptionText(description);
  }, []);

  const handleChangeNewDescription = (e) => {
    let newDescription = e.target.value;
    setDescriptionText(newDescription);
    let newState = {
      ...state,
      cards: cards.map((card) => {
        if (card.id === cardId) {
          card.description = newDescription;
        }
        return card;
      }),
    };
    setState(newState);
  };

  return (
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
  );
};

const DescriptionTitle = styled.h2`
  margin: 0;
  align-self: flex-start;
  color: #172b4d;
  font-size: 0.75rem; ;
`;

const DescriptionIcon = styled(MdOutlineDescription)`
  color: #172b4d;
  align-self: flex-start;
  margin-left: 3%;
  margin-right: 1%;
`;

const DescriptionTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 4%;
  margin-top: 8px;
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
