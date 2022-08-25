export type AddCardPayload = {
  columnId: string;
  title: string;
};

export type UpdateCardPayload = {
  cardId: string;
  title: string;
  description: string;
};
