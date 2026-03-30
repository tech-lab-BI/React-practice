import "./App.css";
import ClockHeading from "./Component/ClockHeading";
import ClockSlogan from "./Component/ClockSlogan";
import ClockTime from "./Component/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
  </center>
}

export default App;
