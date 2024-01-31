import React, { useRef } from 'react';
function Button({onHit,children}){
    const saveOnHit=useRef(null);
    function handleOnClick(){
        if(saveOnHit.current!==null){
            clearInterval(saveOnHit.current)
        }
       saveOnHit.current= setTimeout(()=>{
            onHit()
        },1000)
    }
    return(
        <button onClick={handleOnClick}>{children}</button>
    )
}
export default function Debouncing() {
  return (
    <>
      <Button onHit={()=>alert('Spaceship launched!')}>Launch the spaceship</Button>
      <Button onHit={()=>alert('soup boilded')}>Soup boiled!</Button>
      <Button onHit={()=>alert(' Sing a lullaby')}> Sing a lullaby</Button>

    </>
  )
}
