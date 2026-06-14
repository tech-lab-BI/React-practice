import { createStore } from "redux";

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

const CounterStore = createStore(counterReducer);

export default CounterStore;