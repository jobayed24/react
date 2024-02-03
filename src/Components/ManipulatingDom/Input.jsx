import React, { forwardRef, useImperativeHandle, useRef } from 'react';

export const Input=forwardRef((props,ref)=>{
    const refDom=useRef(null);
    useImperativeHandle(ref,()=>({
        focus(){
            refDom.current.focus();
        }
    }))
    return (<input {...props} ref={refDom}></input>)
})


