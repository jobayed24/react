import React, { useRef } from 'react';

const catList=[];
for(let i=0; i<10; i++){
    catList.push({
        id: i,
        imageUrl: 'https://placekitten.com/250/200?image=' +i,
    })
}
export default function CatFriends() {
        const refValue=useRef(null);

        function scrollToId(id){
            refValue.current.get(id).scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center"
            })
        }

        function myMap(){
            if(!refValue.current){
                return refValue.current= new Map();
            }else{
                return refValue.current;
            }
        }

  return (
    <>
    <nav>
        <button onClick={()=>scrollToId(2)}>Tom</button>
        <button  onClick={()=>scrollToId(6)}>Maru</button>
        <button  onClick={()=>scrollToId(8)}>Tony</button>
</nav>  

    <div>
       <ul>
        {catList.map((cat)=>(
            <li key={cat.id}
            ref={(node)=>{
                const myMaps=myMap();
                if(node){
                    myMaps.set(cat.id,node)
                }else{
                    myMaps.delete(cat.id)
                }
            }}
            
            >
                <img src={cat.imageUrl} alt={`cat ${cat.id}`} />
            </li>
        ))}
       </ul>
    </div>

    </>
  )
}
