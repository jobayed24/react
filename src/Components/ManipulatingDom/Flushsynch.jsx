import React, { useRef, useState } from 'react';

export default function Flushsynch() {
    const [inputValue,setInputValue]=useState("");
    const [itemList,setItemList]=useState(arrayList)
    const getLastElement=useRef(null)
    
   function handleAddItem(){
    setInputValue("")
    setItemList([
      ...itemList,
      {
        id: (itemList.length-1)+1,
        text: inputValue
      }
    ])
    getLastElement.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'

    })
   }
  return (
    <>
      <button onClick={handleAddItem}>Add</button>
      <input value={inputValue} onChange={(event)=>setInputValue(event.target.value)}/>
      <ul ref={getLastElement}>
        {itemList.map((list)=>(
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </>
  )
}

let generatId=0;
const arrayList=[];
for(let i=0; i<40;i++){
  
  arrayList.push({id: generatId++,text:`text ${i+1}`})
}