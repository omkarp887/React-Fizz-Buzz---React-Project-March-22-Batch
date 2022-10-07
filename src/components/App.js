import React, { useState } from "react";
import '../styles/App.css';


const App = () => {
  const state = useState();
  const [count, setCount] = useState(1);
  

  const IncNum =()=>{
    // console.log('clicked')
    setCount(count + 1);
  }

  const DecNum =()=>{
    // console.log('clicked')
    if(count != 1){
    setCount(count - 1);
    }
  }
  
  

  return (
    <div id="main">
    <div id="counter">
    <button onClick={IncNum}>Increment</button>

    <h1 className= {count % 5 == 0 && count % 3 == 0 ? 'fizzbuzz' : (count % 3 == 0) ? 'fizz' : (count % 5 == 0 ) ? 'buzz' : 'normal'}>{count}</h1>
    
    <button onClick={DecNum}>decrement</button>
    </div>
    </div>
  )
  
}


export default App;
