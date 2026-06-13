const redux = require("redux");

const INITIAL_VALUE = 10;

const reducer = (store = INITIAL_VALUE, action) => {
  let tem = store;
  console.log(action.type);
  if (action.type === "ADD") {
    tem = tem + 5;
  } else if (action.type === "SUB") {
    tem = tem - 5;
  } else if (action.type === "MUL") {
    tem = tem * 5;
  }
  return tem;
};
// @@redux/INITc.f.f.q.i
// its automatically run first time

const store = redux.createStore(reducer);

const subscriber = () => {
  console.log("OP : ", store.getState());
};

store.subscribe(subscriber);

store.dispatch({ type: "ADD" });
store.dispatch({ type: "SUB" });
store.dispatch({ type: "MUL" });
store.dispatch({ type: "DIV" });
