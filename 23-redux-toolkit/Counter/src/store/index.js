import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const CounterStore = configureStore({
  reducer: counterSlice.reducer,
});

export const CounterActions = counterSlice.actions;
export default CounterStore;

/*
const INITIAL_VALUE = {
    counter: 0,
    privacy: false,
}

const counterReducer = (store = INITIAL_VALUE, action) => {
    let tem = store;
    if(action.type === "INCREMENT"){
        tem = {...store, counter: store.counter + 1};
    } else if(action.type === "DECREMENT"){
        tem = {...store, counter: store.counter - 1};
    } else if(action.type === "ADD"){
        tem = {...store, counter: store.counter + Number(action.payload)};
        // tem = tem + Number(action.payload);
    } else if(action.type === "SUB"){
        tem = {...store, counter: store.counter - Number(action.payload)};
        // tem = tem - Number(action.payload);
    } else if(action.type === "PRIVACY"){
        tem = {...store, privacy: !store.privacy};
    }
    return tem;
}

*/
