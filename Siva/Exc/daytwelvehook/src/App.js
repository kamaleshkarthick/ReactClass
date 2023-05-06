import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  setCounter
} from "./actions/counterActions";
import { Details } from "./Details";

export default function App() {
  const dispatch = useDispatch();

  const [number,setNumber] = useState(0);

  useEffect(() => {
    const tim = setInterval(() =>{
      setNumber(num => num+1)
    },1000)
    
    return() =>{
      clearInterval(tim);
    }
  },[number])

  return (
    <div className="App">
      <p>---------------------------------</p>
      <span>Sect: {number}</span>
      {/* <button onClick={() => setTimer(time => time+1)}>Start</button> */}
      <p>---------------------------------</p>
      <Details />
       <p>
        <button onClick={() => dispatch(incrementCounter())}>INCREMENT</button>
      </p>

      <p>
        <button onClick={() => dispatch(decrementCounter())}>DECREMENT</button>
      </p>

      <p>
        <button onClick={() => dispatch(setCounter(10))}>Set to 5!</button>
      </p>
    </div>
  );
}
