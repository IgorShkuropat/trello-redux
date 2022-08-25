import { createSelector } from 'reselect';

export const selectCards = state => state.cards;

export const selectAttachedCards = columnId =>
  createSelector(selectCards, cards =>
    cards.filter(card => card.columnId === columnId),
  );

export const selectCurrentCardDescription = cardId =>
  createSelector(
    selectCards,
    cards => cards.find(card => card.id === cardId).description || '',
  );
