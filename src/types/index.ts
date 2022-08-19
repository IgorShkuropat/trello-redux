// import { TComment } from './index';
import { Dispatch, SetStateAction } from "react";

export type TComment = {
  text: string;
  cardId: string;
  id: string;
};

export type TCard = {
  id: string;
  text: string;
  columnId: string;
  description?: string;
  comments: TComment[]
};

export type TState = {
  columns: TColumn[];
  cards: TCard[];
  userName: string;
};

export type TColumn = {
  id: string;
  title: string;
};

export type TContext = {
  state: TState;
  setState: Dispatch<SetStateAction<TState>>;
};

export type TsetValue<TState> = Dispatch<SetStateAction<TState>>;

export type TsetComments<TComment> = Dispatch<SetStateAction<TComment>>

export interface ILocalStorage {
  (initialValue: TState, key: string): [TState, TsetValue<TState>];
}
