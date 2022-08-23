import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TComment } from '../../types';
import { generateID } from '../../utils/generateID';
import { removeCard } from '../cards';
import { AddCommentPayload, ChangeTextPayload } from './types';

const initialState: TComment[] = [];

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(comments, action: PayloadAction<AddCommentPayload>) {
      comments.push({
        id: generateID(),
        text: action.payload.text,
        cardId: action.payload.cardId,
      });
    },
    changeText(comments, action: PayloadAction<ChangeTextPayload>) {
      comments.map(comment =>
        comment.id === action.payload.commentId
          ? (comment.text = action.payload.newText)
          : comment,
      );
    },
    deleteComment(comments, action: PayloadAction<string>) {
      return comments.filter(comment => comment.id !== action.payload);
    },
  },
  extraReducers: {
    [removeCard.type]: (comments, { payload }: PayloadAction<string>) =>
      comments.filter(comments => comments.cardId !== payload),
  },
});

export const { addComment, changeText, deleteComment } = comments.actions;
export default comments.reducer;
