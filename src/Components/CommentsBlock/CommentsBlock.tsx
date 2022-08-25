import React, { FC } from 'react';
import { Flex, Button, Comment } from '../../components';
import { FaRegComments as Icon } from 'react-icons/fa';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addComment } from '../../ducks/comments';
import { selectAttachedComments } from '../../ducks/comments';
import { selectUserName } from '../../ducks/user';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {
  cardId: string;
};

type Field = {
  commentText: string;
};

export const CommentsBlock: FC<Props> = ({ cardId }) => {
  const { handleSubmit, register, resetField } = useForm<Field>();

  const userName = useAppSelector(selectUserName);
  const attachedComments = useAppSelector(selectAttachedComments(cardId));
  const dispatch = useAppDispatch();

  const addCommentToCard: SubmitHandler<Field> = ({ commentText }) => {
    dispatch(addComment({ cardId, text: commentText }));
    resetField('commentText');
  };
  return (
    <>
      <Flex direction="column" width="90%" align="center">
        <Flex align-self="flex-end">
          <CommentsIcon />
          <Title>Comments</Title>
        </Flex>
        <Textarea
          {...register('commentText', { required: true })}
          placeholder="Leave a comment!"
        />
        <Flex justify="flex-end">
          <Button onClick={handleSubmit(addCommentToCard)} margin="0 8px 0 0">
            Add comment
          </Button>
        </Flex>
        {attachedComments.map(comment => (
          <Comment
            key={comment.id}
            userName={userName}
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
  &[type='text'] {
    font-family: Roboto, sans-serif;
    font-size: 0.7rem;
    color: #7c818b;
    padding: 0;
  }
`;
