import { createStore } from "redux";

const ITEM_LIST = {
    count: 0,
    privacy: false,
  };

const cartReducer = (store = ITEM_LIST, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, count: store.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, count: store.count - 1 };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const CartStore = createStore(cartReducer);

export default CartStore;
