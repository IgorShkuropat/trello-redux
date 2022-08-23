import React, { FC, useState } from 'react';
import { TComment } from '../../types';
import { BsFillPencilFill as Pencil } from 'react-icons/bs';
import { IoClose as Close } from 'react-icons/io5';
import { Flex, Button } from '../../components';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/redux/hooks';
import { changeText, deleteComment } from '../../ducks/comments/commentsSlice';

type Props = {
  userName: string;
  comment: TComment;
  cardId: string;
};

export const Comment: FC<Props> = ({ userName, comment }) => {
  const [isCommentEditing, setisCommentEditing] = useState(false);
  const [newCommentText, setNewCommentText] = useState(comment.text);
  const dispatch = useAppDispatch();
  const handleChangeNewCommentText = e => {
    setNewCommentText(e.target.value);
  };

  const applyNewCommentText = () => {
    dispatch(changeText({ commentId: comment.id, newText: newCommentText }));
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
            <DeleteCommentIcon
              onClick={() => dispatch(deleteComment(comment.id))}
            />
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
  &[type='text'] {
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
