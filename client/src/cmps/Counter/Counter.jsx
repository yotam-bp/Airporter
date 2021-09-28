import React from 'react';
import { useStopwatch } from 'react-timer-hook';

const Counter = () => {
  const {
    seconds,
    minutes,
    hours,

  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>
      <p>From last search</p>
      <div style={{fontSize: '20px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default Counter