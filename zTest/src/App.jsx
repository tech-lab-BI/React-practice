import { useReducer } from "react";

function setFun(state, action){
  switch(action.opt){
    case "1":
      state = [...state, action.parameter];
      break;
    case '2':
      state = [...state, action.parameter];
      break;
    default:
      console.log("default");
  }
  return state;
}

function App(){
  const [item, changeVal] = useReducer(setFun, ["BIKI - "]);

  return (<>
    <button onClick={() => changeVal({
      opt: "1",
      parameter: "a ",
    })}>Add +</button>
    <button onClick={() => changeVal({
      opt: "2",
      parameter: "b ",
    })}>Delete -</button>
    <p>{item}</p>
  </>);
}

export default App;