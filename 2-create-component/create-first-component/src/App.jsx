import Test_but from "./Component/t_Button";
import Hello from "./Component/Hello";
import Random from "./Component/Random";

function App() {

  let name = 'Bikram';
  function age(){
    return 20;
  }
  return <div>
    <Test_but/>
    <Hello/>
    <Random/>
    <Random/>
    <Random/>
  </div> 
  
}

export default App;