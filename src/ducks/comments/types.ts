export type AddCommentPayload = {
  cardId: string;
  text: string;
};

export type ChangeTextPayload = {
  commentId: string;
  newText: string;
};
