import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { order as cakeOrder } from "../cake/CakeSlice";

type initialStateType = {
  numberOfIccream: number;
};

const initialState: initialStateType = {
  numberOfIccream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    order: (state, action: PayloadAction<number>) => {
      state.numberOfIccream -= action.payload;
    },
    reStoced: (state, action: PayloadAction<number>) => {
      state.numberOfIccream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrder, (state) => {
      state.numberOfIccream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { order, reStoced } = icecreamSlice.actions;
