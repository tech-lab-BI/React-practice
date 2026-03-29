import Test_but from "./t_Button";
import Hello from "./Hello";
import Random from "./Random";

function App() {

  let name = 'Bikram';
  function age(){
    return 20;
  }
  return <div>
    <h1>hello world</h1>
    <Test_but></Test_but>
    <Hello></Hello>
    <p>I am {name} , my age {age()}</p>
    <Random></Random>
    <Random></Random>
    <Random></Random>
  </div> 
  
}

export default App;