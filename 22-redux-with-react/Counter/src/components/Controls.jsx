import { useRef } from "react";
import { useDispatch } from "react-redux";
const Controls = () => {
  const counterDispatch = useDispatch();
  const numElement = useRef();

  const handleIncrement = () => {
    counterDispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    counterDispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    const num = numElement.current.value;
    counterDispatch({ type: "ADD",payload: num });
    numElement.current.value = "";
  };
  const handleSub = () => {
    const num = numElement.current.value;
    counterDispatch({ type: "SUB",payload: num });
    numElement.current.value = "";
  };
  const handlePrivacy = () => {
    counterDispatch({ type: "PRIVACY"});
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary button-container"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success button-container"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-secondary" onClick={handlePrivacy}>Hide Counter</button>
      </div>
      <div>
        <input type="number" placeholder="Enter Number" ref={numElement} />
        <button type="button" className="btn btn-info button-container" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSub}>
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
