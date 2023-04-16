import React, { useState, useEffect } from 'react'
import Title from './components/Title';
import Button from './components/Button';
import Count from './components/Count';
import './App.css';

function App() {

  const [count, setCount] = useState(1)
  const [salary, setSalary] = useState(10000);

  const handleCountInct = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    setSalary(count*10000)
  }, [count,salary])
  
  const handleClickEvent = () =>{
     console.log("You click this page")
  }
  useEffect( () => {
    document.addEventListener("click",handleClickEvent)
    //Cleaup
    return () => document.removeEventListener("click",handleClickEvent)
  })




  return (
    <div className='hooks-dempo'>
      <Title />
      <Count title="COUNT" value={count} />
      <Button handleclick={handleCountInct} />
      <Count title="SALARY" value={salary} />
    </div>
  );
}

export default App;
