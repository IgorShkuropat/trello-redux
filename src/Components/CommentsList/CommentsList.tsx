import React, { useContext, useState, FC } from "react";
import { Flex, Comment } from "../../components";
import { Context } from "../../store/Context";

type Props = {
  comments: {
    cardId: string,
    text: string
  }
}
export const CommentsList = ({comments}) => {
  const {
    state: {
      userName,
    },
  } = useContext(Context);

  return (
    <>
      {comments &&
        comments.map((comment) => (
          <>
            <Comment userName={userName} comment={comment} />
            <h1>GARIK</h1>
          </>
        ))}
    </>
  );
};
