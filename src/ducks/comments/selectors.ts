import { createSelector } from "reselect";

const selectComments = state => state.comments

export const selectAttachedComments = cardId => createSelector(selectComments, comments  => comments.filter(comment => comment.cardId === cardId )) 