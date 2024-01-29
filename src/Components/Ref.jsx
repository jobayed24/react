import React, { useRef } from 'react';

export default function Ref() {
    const countRef=useRef(0);
    function handleCountClick(){
        countRef.current=countRef.current+1;
        console.log(`you click ${countRef.current} times`);
    }

  return (
    <>
      
      <button onClick={handleCountClick}>Click me !</button>
    </>
  )
}
