import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateID } from "../../utils/generateID";

const columns = createSlice({
  name: "columns",
  initialState: [

    { id: "1", title: "TODO" },
    { id: "2", title: "In Progress" },
    { id: "3", title: "Testing" },
    { id: "4", title: "Done" },
  ],

  reducers: {
    addColumn(columns, action: PayloadAction<string>) {
      columns.push({ id: generateID(), title: action.payload });
    },
  },
});

export const { addColumn } = columns.actions;

export default columns.reducer;
