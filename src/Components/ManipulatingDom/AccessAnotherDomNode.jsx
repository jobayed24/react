import React, { useRef } from 'react';
import { Input } from './Input';

export default function AccessAnotherDomNode() {
    const refValue=useRef(null);
      function handleFocue(){
          refValue.current.focus();
      }
  return (
    <>
      <Input ref={refValue} placeholder="Type you name !" />
      <button onClick={handleFocue}>Input Focus !</button>
    </>
  )
}
