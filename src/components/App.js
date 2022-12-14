import React, { useState } from "react";
import '../styles/App.css';


const App = () => {
  
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

    <button id="increment" onClick={IncNum}>Increments</button>  
    
    <div id='counter' className= {(count % 5 == 0 && count % 3 == 0) ? 'fizzbuzz' : (count % 3 == 0) ? 'fizz' : (count % 5 == 0 ) ? 'buzz' : 'normal'}>{count}</div>
    
    <button id="decrement" onClick={DecNum}>decrements</button>
    </div>
  )
  
}


export default App;
