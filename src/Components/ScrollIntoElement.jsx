import React, { useRef } from 'react';

export default function ScrollIntoElement() {
    const tom=useRef(null);
    const maru=useRef(null);
    const Tony=useRef(null);

    function firstCatScroll(){
        tom.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    }
    function secondCatScroll(){
        maru.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    }
    function thirdCatScroll(){
        Tony.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    }
  return (
    <>
      <nav>
        <button onClick={firstCatScroll}>Tom</button>
        <button onClick={secondCatScroll}>Maru</button>
        <button onClick={thirdCatScroll}>Tony</button>

        <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={tom}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={maru}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={Tony}
            />
          </li>
        </ul>
        </div>
      </nav>
    </>
  )
}
