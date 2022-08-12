import { Dispatch, SetStateAction } from "react";

export type TCard = { id: string; text: string; columnId: string; description?: string};
export type TModalCardProps = {
  cardProps: TCard;
  toggleModal: () => void;
};
export type TCardProps = {
  currentColumnId: string;
};
export type TState = {
  columns: TColumn[];
  cards: TCard[];
  commentaries: {
    id: string;
    text: string;
  }[];
  userName?: string;
};

export type TColumn = {
  id: string;
  title: string;
};
export type Props = {
  column: TColumn;
};

export type PencilType = {
  hover?: boolean;
};

export type TModal = {
  children: React.ReactNode;
};

export type TContext = {
  state: TState;
  setState: Dispatch<SetStateAction<TState>>;
};

export type setValue<TState> = Dispatch<SetStateAction<TState>>;

export interface ILocalStorage {
  (initialValue: TState, key: string): [TState, setValue<TState>];
}
