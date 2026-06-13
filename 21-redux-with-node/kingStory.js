//npm init -y
//npm install redux
const redux = require("redux"); //import system

const INITIAL_VALUE = 0; // 🏰 Kingdom starts with 0 coins

const reducer = (store = INITIAL_VALUE, action) => {
  //  step 1
  // 👨‍⚖️ Accountant (Reducer)
  if (action.type === "INCREMENT") {
    // 📜 King orders: Add 1 coin
    return store + 1;
  } else if (action.type === "DECREMENT") {
    // 📜 King orders: remove 1 coin
    return store - 1;
  }
  return store;
};

const store = redux.createStore(reducer); // 🏰 Create the kingdom treasury/vault (Store)       // step 2

const subscriber = () => {
  // step 3
  // 👀 Reporter : Announces treasury amount whenever it changes
  console.log("Coins:", store.getState());
};

store.subscribe(subscriber); // Reporter starts watching

store.dispatch({ type: "INCREMENT" }); // 👑 King sends an order                                // step 4
store.dispatch({ type: "DECREMENT" });

//run command :: node reduxTest.js
