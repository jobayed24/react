import { useState } from 'react';

export default function Toggle() {
  const [isOnRef,setIsOnRef] = useState(false);

  return (
    <button onClick={() => {
      setIsOnRef((value)=>!value) 
    }}>
      {isOnRef ? 'On' : 'Off'}
    </button>
  );
}
