import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
    console.log("remove from bag");
    console.log(state);
      return state.filter(itemId => itemId !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
