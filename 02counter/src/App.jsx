import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  // let counter = 5
  const incrementValue = () => {
    counter = counter + 1;
    if(counter<21){

      setCounter(counter);
    }
    console.log("Counter is : ", counter);
  };
  const decrementValue = () => {
    counter = counter - 1;
    if (counter > 0) {
      setCounter(counter);
    }
    console.log("Counter is : ", counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter button: {counter}</h2>
      <button onClick={incrementValue}>Incremenet Value {counter}</button>
      <br />
      <button onClick={decrementValue}>Decrement Value{counter}</button>
    </>
  );
}

export default App;
