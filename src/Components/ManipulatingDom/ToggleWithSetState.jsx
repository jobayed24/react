import React, { useRef, useState } from 'react';

export default function ToggleWithSetState() {
    const [show,setShow]=useState(true);
    const getPElement=useRef(null)

    

  return (
    <>
      <button onClick={()=>setShow((show)=>!show)}>Toggle With Set State</button>
      <button onClick={()=>getPElement.current.remove()}>Remove From Dom</button>
      {show && <p ref={getPElement}>{`Hello Jobayed`}</p>}
    </>
  )
}
