import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TCard } from '../../types';
import { generateID } from '../../utils/generateID';

import type { AddCardPayload, UpdateCardPayload } from './types';

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
    updateCard(cards, action: PayloadAction<UpdateCardPayload>) {
      return cards.map(card =>
        card.id === action.payload.cardId
          ? { ...card, ...action.payload }
          : card,
      );
    },
  },
});

export const { addCard, removeCard, updateCard } = cards.actions;

export default cards.reducer;
