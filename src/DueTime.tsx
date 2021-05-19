import React from 'react';


type Durations = {startTime: string, endTime: string}[];
type Props = {
	durations: Durations;
}

function DueTime(props: Props): JSX.Element {
  console.log("props")
  console.log(props)
  return (
    <React.Fragment>
      <p>DueTime</p>
      {props.durations && props.durations.map((duration, index) => (
        <p>{duration.startTime}, {duration.startTime}</p>
      ))}
    </React.Fragment>
  );
}

export default DueTime;
