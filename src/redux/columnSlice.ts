import { createSlice } from "@reduxjs/toolkit";
import { generateID } from "../utils/generateID";

const columnSlice = createSlice({
  name: "columns",
  initialState: {
    columns: [
      { id: "1", title: "TODO" },
      { id: "2", title: "In Progress" },
      { id: "3", title: "Testing" },
      { id: "4", title: "Done" },
    ],
  },
  reducers: {
    addColumn(state, action) {
      state.columns.push({ id: generateID(), title: action.payload.title });
    },
  },
});

export const { addColumn } = columnSlice.actions;

export default columnSlice.reducer;
