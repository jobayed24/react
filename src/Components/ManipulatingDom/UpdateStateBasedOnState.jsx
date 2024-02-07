import React, { useState } from 'react';

export default function UpdateStateBasedOnState() {
    const [firstName,setFirstName]=useState("jobayed");
    const [lastName,setLastName]=useState("hossen");

    const fullName=firstName+' '+lastName;
    console.log(fullName)
  return (
    <>
      <label>FirstName:</label>
      <input onChange={(e)=>setFirstName(e.target.value)} />

      <label>LastName: </label>
      <input onChange={(e)=>setLastName(e.target.value)} />

      <p>{fullName!==" " ? fullName : "there are no post" }</p>
    </>
  )
}
