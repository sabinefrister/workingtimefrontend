import React, { useEffect, useState } from 'react';
import './App.css';
import OverTimeForm from './OverTimeForm';
import TimeTracker from './TimeTracker';


function App(): JSX.Element{
  useEffect(()=> {document.title = "My Working Time"}) 
  const [overTimeValue, setOverTimeValue] = useState("")
  const getOverTimeValue = (overTime: string) => {
    setOverTimeValue(overTime);
  }

  const [durationValue, setDurationValue] = useState([{startTime: "00:00", endTime: "00:00"}])
  const getDurationValue = (duration: any) => {
    setDurationValue(duration.durations);
  }
  
  return (
    <div className="App">
      <h1>My Working Time</h1>
      <OverTimeForm sendOverTimeValue={getOverTimeValue} />
      <TimeTracker sendDurationValue={getDurationValue}/>
{/*    {durationValue.map((duration, index) => (
        <div>
          <p>{duration.startTime}</p>
          <p>{duration.endTime}</p>
        </div>
      ))}*/}
    </div>
  );
}

export default App;
