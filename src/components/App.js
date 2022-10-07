import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const[count,setCount]=useState(1)

    const IncrementHandler=()=>{
          setCount(count+1)
    }

    const DecrementHandler=()=>{
        if(count != 1){
            setCount(count-1)
        }

    }
  
  return (
    <div id="main">
     <div id='counter'>
        <h2 className= {count % 5 == 0 && count % 3 == 0 ? 'fizzbuzz' : (count % 3 == 0) ? 'fizz' : (count % 5 == 0 ) ? 'buzz' : 'normal'}>{count}</h2>
        <button id='increment' onClick={IncrementHandler}>Increments</button>
        <button id='decrement' onClick={DecrementHandler}>Decrements</button>
    </div>

    </div>
  )
}


export default App;