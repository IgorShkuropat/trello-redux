import React, { useState, useContext, FC } from "react";
import { generateID } from "../../utils/generateID";
import { Context } from "../../redux/store/Context";
import { Flex, Button, Comment } from "../../components";
import { FaRegComments as Icon } from "react-icons/fa";
import styled from "styled-components";

type Props = {
  cardId: string;
};

export const CommentsBlock: FC<Props> = ({ cardId }) => {
  const { state, setState } = useContext(Context);
  const [textarea, setTextarea] = useState("");
  const currentCard = state.cards.find((card) => card.id === cardId);

  const handleChangeTextarea = (e) => {
    setTextarea(e.target.value);
  };

  const addComment = () => {
    setTextarea("");
    const newState = {
      ...state,
      cards: state.cards.map((card) => {
        if (card.id === cardId) {
          card.comments &&
            (card.comments = [
              ...card.comments,
              { text: textarea, cardId: cardId, id: generateID() },
            ]);
        }

        return card;
      }),
    };
    setState(newState);

  };

  return (
    <>
      <Flex direction="column" width="90%" align="center">
        <Flex align-self="flex-end">
          <CommentsIcon />
          <Title>Comments</Title>
        </Flex>
        <Textarea
          value={textarea}
          onChange={handleChangeTextarea}
          placeholder="Leave a comment!"
        />
        <Flex justify="flex-end">
          <Button onClick={addComment} margin="0 8px 0 0">
            Add comment
          </Button>
        </Flex>
        {currentCard?.comments.map((comment) => (
          <Comment
            key={comment.id}
            userName={state.userName}
            comment={comment}
            cardId={cardId}
          />
        ))}
      </Flex>
    </>
  );
};

const CommentsIcon = styled(Icon)`
  color: #172b4d;
  align-self: flex-start;
  margin-left: 8.3px;
  margin-right: 2.76px;
`;
const Title = styled.h2`
  margin: 0;
  align-self: flex-start;
  color: #172b4d;
  font-size: 0.75rem; ;
`;

const Textarea = styled.textarea`
  width: 90%;
  margin: 8px 0 12px 0;
  resize: none;
  color: #172b4d;
  font-size: 0.75rem;
  border-radius: 0.1875rem;
  &[type="text"] {
    font-family: Roboto, sans-serif;
    font-size: 0.7rem;
    color: #7c818b;
    padding: 0;
  }
`;
