import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  name: string;
};

const initialState: User = {
  name: "",
};

const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setName(user, action: PayloadAction<string>) {
        user.name = action.payload;
    },
  },
});

export const { setName } = user.actions;

export default user.reducer;
