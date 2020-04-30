import React from 'react';
import style from './../Training.module.css';
const Slide = (props)=>{
    const {nameArm,bg,img,color}= props;
    return(
    <div className={style.slide_div} style={{backgroundImage:`url(${img})`}}>
        {/* <img src={img} className={style.slide} /> */}
        <div >
            <h2 style={{backgroundColor:bg,color:color}}>{nameArm}</h2>
        </div>

    </div>
    )
}

export default Slide;