export type AddCardPayload = {
  columnId: string;
  title: string;
};

export type RenameCardPayload = {
  cardId: string;
  newTitle: string;
};

export type ChangeDescriptionPayload = {
  cardId: string;
  newText: string;
};
