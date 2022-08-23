import { createSelector } from "reselect";

export const selectCards = state => state.cards

export const selectAttachedCards = columnId => createSelector(selectCards, cards => cards.filter(card => card.columnId === columnId))