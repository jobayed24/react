import React, { useRef } from 'react';

export default function ManipulatingDom() {
    const getRefOfInput=useRef(null);
    function hadleOnClick(){
        getRefOfInput.current.focus();
    }
  return (
    <>
      <input ref={getRefOfInput}/>
      <button onClick={hadleOnClick}>Focus the button</button>
    </>
  )
}
