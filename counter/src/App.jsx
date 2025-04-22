import { useState } from 'react';
import './App.css'

function App() {
const [counter,setCounter] = useState(15)
  //let counter =5

  const addValue =()=>{
    console.log("clicked",counter);
    setCounter(counter+1)
   // counter=counter+1
  }

  const removeValue=()=>
  {
    console.log("remove",counter);
    setCounter(counter-1)
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value </button>
     <br/>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
