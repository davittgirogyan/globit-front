import React from 'react';
import img from '../../../assets/images/loader.png';
import style from './Loader.module.css';
const Loader = (props)=>{
    return <div>
        <img alt="loading" className={style.image} src={img}/>
    </div>
}

export default Loader;