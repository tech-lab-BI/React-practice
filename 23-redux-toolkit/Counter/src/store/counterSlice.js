import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //redux create counter/increment
  initialState: { val: 0 },
  reducers: {
    increment: (state) => {
      state.val++;
    },
    decrement: (state) => {
      state.val--;
    },
    add: (state, action) => {
      state.val += Number(action.payload);
    },
    sub: (state, action) => {
      state.val -= Number(action.payload);
    },
  },
});

export const CounterActions = counterSlice.actions;
export default counterSlice;