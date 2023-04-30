import React, { useState, useEffect } from 'react'
import Title from './components/Title';
import Button from './components/Button';
import Count from './components/Count';
import SalaryCount from './components/SalaryCount';
import './App.css';

function App() {

  const [count, setCount] = useState(1)
  const [salary, setSalary] = useState(10000);

  // const handleCountInct = () => {
  //   setCount(count + 1)
  // }

  const handleCountInct = React.useCallback( () =>{
    setCount(count + 1)
  },[count])

  const handleSalaryHike = () =>{
    console.log("state gonna update")
    setSalary(salary+1000)
  }
  const _salary = React.useMemo(() =>{
    return salary;
  },[salary])

  // useEffect(() => {
  //   setSalary(count*10000)
  // }, [count,salary])
  
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
      <Count title="NUMBER" value={count} />
      <Button handleclick={handleCountInct} />
      <SalaryCount title="SALARY" value={_salary} />
      <Button handleclick={handleSalaryHike} />
    </div>
  );
}

export default App;
