import React, { useEffect, useState } from 'react';
import './App.css';
import OverTimeForm from './OverTimeForm';
import TimeTracker from './TimeTracker';
import DueTime from './DueTime';


type Duration = {startTime: string, endTime: string};
type Durations = {
  durations: Duration[]
};

function App(): JSX.Element{
  useEffect(()=> {document.title = "My Working Time"}) 
  const [overTimeValue, setOverTimeValue] = useState("")
  const getOverTimeValue = (overTime: string) => {
    setOverTimeValue(overTime);
  }

  const [durationValue, setDurationValue] = useState<Durations>({durations: [{startTime: "00:00", endTime: "00:00"}]})
  const getDurationValue = (duration: any) => {
    console.log("duration with getDurationValue")
    console.log(duration.durations)
    setDurationValue(duration);
  }
  console.log("durationValue before return")
  console.log(durationValue)
  return (
    <div className="App">
      <h1>My Working Time</h1>
      <p>Overtime: {overTimeValue}</p>
      <DueTime durations={durationValue.durations}/>
      <OverTimeForm sendOverTimeValue={getOverTimeValue} />
      <TimeTracker sendDurationValue={getDurationValue}/>
    </div>
  );
}

export default App;
