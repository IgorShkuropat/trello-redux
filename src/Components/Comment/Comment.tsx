import React, { FC, useContext, useState } from "react";
import { Context } from "../../store/Context";
import { TComment, TsetComments } from "../../types";
import { BsFillPencilFill as Pencil } from "react-icons/bs";
import { IoClose as Close } from "react-icons/io5";
import { Flex, Button } from "../../components";
import styled from "styled-components";

type Props = {
  userName: string;
  comment: TComment;
  cardId: string;
  setCommentsList: TsetComments<TComment[]>;
};

export const Comment: FC<Props> = ({
  userName,
  comment,
  cardId,
  setCommentsList,
}) => {
  const { state, setState } = useContext(Context);
  const [isCommentEditing, setisCommentEditing] = useState(false);
  const [newCommentText, setNewCommentText] = useState(comment.text);

  const handleChangeNewCommentText = (e) => {
    setNewCommentText(e.target.value);
  };

  const applyNewCommentText = () => {
    const newState = {
      ...state,
      cards: state.cards.map((card) => {
        if (card.id === cardId) {
          card.comments = card.comments.map((cardComment) => {
            if (cardComment.id === comment.id) {
              cardComment.text = newCommentText;
            }
            return cardComment;
          });
        }
        return card;
      }),
    };
    setState(newState);
  };

  const deleteComment = () => {
    const newState = {
      ...state,
      cards: state.cards.map((card) => {
        if (card.id === cardId) {
          card.comments = card.comments.filter(
            (cardComment) => cardComment.id !== comment.id
          );
        }
        return card;
      }),
    };
    setState(newState);
    const currentCard = state.cards.find((card) => card.id === cardId);
    const newCommentsList = currentCard?.comments.filter(
      (cardComment) => comment.id !== cardComment.id
    );
    setCommentsList(newCommentsList!);
  };
  return (
    <StyledFlex
      direction="column"
      margin="12px 0 8px 12px"
      gap="4px"
      width="237px"
    >
      <Flex direction="column" gap="4px">
        <Flex justify="space-between">
          <AuthorName>{userName}</AuthorName>
          <Flex gap="4px">
            <Pen onClick={() => setisCommentEditing(true)} />
            <DeleteCommentIcon onClick={deleteComment} />
          </Flex>
        </Flex>
      </Flex>
      {isCommentEditing ? (
        <>
          <CommentTextTextarea
            value={newCommentText}
            onChange={handleChangeNewCommentText}
          />
          <Button
            onClick={() => (setisCommentEditing(false), applyNewCommentText())}
          >
            Save comment
          </Button>
        </>
      ) : (
        <CommentText>{newCommentText}</CommentText>
      )}
    </StyledFlex>
  );
};

const StyledFlex = styled(Flex)`
  overflow: hidden;
`;

const AuthorName = styled.span`
  color: #172b4d;
  font-weight: 700;
  font-size: 1rem;
`;

const CommentText = styled.span`
  color: #192d4e;
  font-weight: 400;
  font-size: 0.75rem;
`;

const CommentTextTextarea = styled.textarea`
  resize: none;
  color: #172b4d;
  width: 90%;
  &[type="text"] {
    font-family: Roboto, sans-serif;
    font-size: 0.7rem;
    color: #7c818b;
    padding: 0;
  }
`;

const Pen = styled(Pencil)`
  display: block;
  width: 1rem;
  height: 1rem;
  color: grey;
  cursor: pointer;
`;

const DeleteCommentIcon = styled(Close)`
  display: block;
  width: 1rem;
  height: 1rem;
  color: grey;
  cursor: pointer;
`;
