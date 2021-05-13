import React, { useEffect, useState } from 'react';
import './App.css';
import OverTimeForm from './OverTimeForm';


function App(): JSX.Element{
  useEffect(()=> {document.title = "My Working Time"}) 
  const [overTimeValue, setOverTimeValue] = useState("")

  const getOverTimeValue = (overTime: string) => {
    setOverTimeValue(overTime);
  }

  return (
    <div className="App">
      <h1>My Working Time</h1>
      <OverTimeForm sendOverTimeValue={getOverTimeValue} />
      <p>{overTimeValue}</p>
    </div>
  );
}

export default App;
