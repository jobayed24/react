import { useEffect, useRef, useState } from "react";

function VideoPlayer({isPlay,src}) {
    const videoRef=useRef(null);
    useEffect(()=>{
        if(isPlay){
            videoRef.current.play();
        }else{
            videoRef.current.pause();
        }
    },[isPlay])
    return(<video ref={videoRef} loop playsInline src={src} />)
}

export default function PlayPauseVideoChallange() {
    const [isPlaying,setIsPlaying]=useState(false);
  return (
    <>
     <button onClick={()=>setIsPlaying((play)=>!play)}>{isPlaying ? 'pause' :'play'}</button>
     <VideoPlayer isPlay={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"/>
    </>
  );
}
