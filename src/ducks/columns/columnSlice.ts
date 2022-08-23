import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateID } from '../../utils/generateID';
import type { TColumn } from '../../types';
import { RenameColumnPayload } from './types';

const initialState: TColumn[] = [
  { id: '1', title: 'TODO' },
  { id: '2', title: 'In Progress' },
  { id: '3', title: 'Testing' },
  { id: '4', title: 'Done' },
];

const columns = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumn(columns, action: PayloadAction<string>) {
      columns.push({ id: generateID(), title: action.payload });
    },

    renameColumn(columns, action: PayloadAction<RenameColumnPayload>) {
      return columns.map(column =>
        column.id === action.payload.columnId
          ? { ...column, title: action.payload.newTitle }
          : column,
      );
    },
  },
});

export const { addColumn, renameColumn } = columns.actions;

export default columns.reducer;
