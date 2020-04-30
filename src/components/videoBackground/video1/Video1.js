import React, { createRef, useEffect, useState } from 'react';
import video from '../../../assets/videos/start.MOV';


const Video1 = ()=>{
    let st = createRef();
    let [op,setOp] = useState(1);

    useEffect(()=>{
        let int = setInterval(()=>{
            setOp((old)=>{return +(old-0.09).toFixed(1)});
        },570);
        return()=>{
            clearInterval(int)
        }
    },[op])
    return(
        <div>
            <video autoPlay muted loop id="myVideo_1" ref={st} style={{opacity:op}} >
            <source src={video} type="video/mp4"/>
            Your browser does not support HTML5 video.
        </video>
        </div>
    )
}

export default Video1;