import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Hi");
    return () => {setCount(0);
      console.log("end");
    }
  }, [count])

  // function handleClick(){
  //   console.log("Hi");
  //   setCount(count+1);
  // }

  return (<>
    <h1>Hello</h1>
    <button onClick={()=> setCount(count+1)}>click{count}</button>
    {/* <button onClick={handleClick}>click{count}</button> */}
  </>);
}
export default App;