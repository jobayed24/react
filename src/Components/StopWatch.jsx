import React, { useState } from 'react';

export default function StopWatch() {
    const [startTime,setStartTime]=useState(null);
    const [nowTime,setNowTime]=useState(null);
    function useRef(initialValue){
        const [ref,unused]=useState({current: initialValue})

        return ref;
    }
      const interValID=useRef(null)
    function handleStartTime(){
        setStartTime(Date.now());
        setNowTime(Date.now());
        

        clearInterval(interValID.current)
       interValID.current= setInterval(() => {
            setNowTime(Date.now());
        }, 10);
        console.log(interValID.current)
    }
     function handleStopTime(){
        clearInterval(interValID.current);
     }
    let secondPassed=0;
    if(startTime !==null && nowTime !==null){
        secondPassed=(nowTime-startTime)/1000;
    }

  return (
    <>
      <h1>Time has passed: {secondPassed.toFixed(3)}</h1>
      <button onClick={handleStartTime}>Start Time</button>
      <button onClick={handleStopTime}>Stop Time</button>
    </>
  )
}
