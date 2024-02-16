import { useState } from 'react'
import './App.css'

function App() {
  //use state is used for ui updation storing it and updating it in ui
  let [counter,setCounter]= useState(15)
  
  // let counter = 5;

  const addValue = () => {
    //value is increasing but not changing in counter value
    //problem is in ui updation
    console.log("click",counter);
    // counter=counter+1
    if(counter>=25) setCounter(25)
    else setCounter(counter+1)
  }

  //for updation of ui we need hooks in react ;by using those hooks that data will going to be upsated
  //ui updation is done by react
  
  const removeValue = () => {
    if(counter<=0) setCounter(0)
    else setCounter(counter-1)
  }

  return (
    <>
      <h1>Basic react for learning hooks</h1>
      <h2>Counter value : {counter}</h2>
      <h3>Counter values are between 0 to 25</h3>

      <button
      onClick={addValue}
      
      >Add value {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >
        Remove value {counter}</button>
    </>
  )
}

export default App
