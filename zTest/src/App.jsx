import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  let square;
  // const square = useMemo(() => {
  //   console.log("Calculating...");
  //   return count * count;
  // }, [count]);

  function squareNum() {
    square = count * count;
  }

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          squareNum();
        }}
      >
        Count {count}
      </button>
      <h1>Square: {square}</h1>
    </>
  );
}

export default App;
