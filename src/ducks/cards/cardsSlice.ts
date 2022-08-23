import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TCard } from '../../types';
import { generateID } from '../../utils/generateID';

import type {
  AddCardPayload,
  RenameCardPayload,
  ChangeDescriptionPayload,
} from './types';

const initialState: TCard[] = [];

const cards = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(cards, action: PayloadAction<AddCardPayload>) {
      cards.push({
        id: generateID(),
        columnId: action.payload.columnId,
        title: action.payload.title,
        comments: [],
      });
    },
    removeCard(cards, action: PayloadAction<string>) {
      return cards.filter(cards => !(cards.id === action.payload));
    },
    renameCard(cards, action: PayloadAction<RenameCardPayload>) {
      return cards.map(card => {
        if (card.id === action.payload.cardId) {
          return { ...card, title: action.payload.newTitle };
        }
        return card;
      });
    },
    changeDescription(cards, action: PayloadAction<ChangeDescriptionPayload>) {
      return cards.map(card =>
        card.id === action.payload.cardId
          ? { ...card, description: action.payload.newText }
          : card,
      );
    },
  },
});

export const { addCard, removeCard, renameCard, changeDescription } =
  cards.actions;

export default cards.reducer;
