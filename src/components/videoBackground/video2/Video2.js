import React from 'react';
import video2 from '../../../assets/videos/videoplayback.mp4'; 

const Video2 = ()=>{
    return(
            <div>
                <video autoPlay muted loop id="myVideo">
                <source src={video2} type="video/mp4"/>
                Your browser does not support HTML5 video.
                </video>
            </div>  
    )
}

export default Video2;
