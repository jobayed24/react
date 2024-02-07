import { useEffect, useRef, useState } from "react";

function VideoPlayer({isPlay,src}) {
    const videoRef=useRef(null);
    useEffect(()=>{
        
        if(isPlay){
            videoRef.current.play();
            console.log("play")
        }else{
            videoRef.current.pause();
            console.log("pause")
            console.log(videoRef.current)
        }
    },[isPlay])
    return(<video ref={videoRef} loop playsInline src={src} />)
}

export default function PlayPauseVideoChallange() {
    const [isPlaying,setIsPlaying]=useState(false);
    console.log('todo Challange',Date.now())
  return (
    <>
    <h1>Jobayed</h1>
     <button onClick={()=>setIsPlaying((play)=>!play)}>{isPlaying ? 'pause' :'play'}</button>
     <VideoPlayer isPlay={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
    </>
  );
}
