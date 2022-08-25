import React, { FC, useState } from 'react';
import { TComment } from '../../types';
import { BsFillPencilFill as Pencil } from 'react-icons/bs';
import { IoClose as Close } from 'react-icons/io5';
import { Flex, Button } from '../../components';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/redux';
import { changeText, deleteComment } from '../../ducks/comments/commentsSlice';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {
  userName: string;
  comment: TComment;
  cardId: string;
};

type Field = {
  commentText: string;
};

export const Comment: FC<Props> = ({ userName, comment }) => {
  const [isCommentEditing, setIsCommentEditing] = useState(false);
  const dispatch = useAppDispatch();
  const { register, getValues, handleSubmit } = useForm<Field>({
    defaultValues: {
      commentText: comment.text,
    },
  });

  const applyNewCommentText: SubmitHandler<Field> = ({ commentText }) =>
    dispatch(changeText({ commentId: comment.id, newText: commentText }));

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
            <Pen onClick={() => setIsCommentEditing(true)} />
            <DeleteCommentIcon
              onClick={() => dispatch(deleteComment(comment.id))}
            />
          </Flex>
        </Flex>
      </Flex>
      {isCommentEditing ? (
        <>
          <CommentTextTextarea
            {...register('commentText', { required: true })}
          />
          <Button
            onClick={() => {
              console.log('GOGA');
              getValues('commentText')
                ? handleSubmit(applyNewCommentText)()
                : dispatch(deleteComment(comment.id));

              setIsCommentEditing(false);
            }}
          >
            Save comment
          </Button>
        </>
      ) : (
        <CommentText>{getValues('commentText')}</CommentText>
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
