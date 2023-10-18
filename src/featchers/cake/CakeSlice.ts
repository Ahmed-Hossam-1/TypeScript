import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  numberOfCake: number;
};

const initialState: initialStateType = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.numberOfCake--;
    },
    reStoced: (state, action: PayloadAction<number>) => {
      state.numberOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { order, reStoced } = cakeSlice.actions;
