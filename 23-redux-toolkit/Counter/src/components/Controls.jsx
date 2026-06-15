import {useDispatch} from 'react-redux'
import { CounterActions } from '../store';
import { useRef } from 'react';

const Controls = () => {
  const counterDispatch = useDispatch();
  const numElement = useRef();

  const handleIncrement = () => {
    counterDispatch(CounterActions.increment());
  };
  const handleDecrement = () => {
    counterDispatch(CounterActions.decrement());
  };
  const handleAdd = () => {
    counterDispatch(CounterActions.add(numElement.current.value));
    numElement.current.value = "";
  };
  const handleSub = () => {
    counterDispatch(CounterActions.sub(numElement.current.value));
    numElement.current.value = "";
  };
  const handlePrivacy = () => {
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
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handlePrivacy}
        >
          Hide Counter
        </button>
      </div>
      <div>
        <input type="number" placeholder="Enter Number" ref={numElement}/>
        <button
          type="button"
          className="btn btn-info button-container"
          onClick={handleAdd}
        >
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
