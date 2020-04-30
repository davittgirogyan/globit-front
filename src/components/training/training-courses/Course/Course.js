import React from 'react';
import './Course.css';

const Course = (props)=>{
    return(
        <div className="single-course">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={props.img} alt="Avatar" style={{width:"300px",height:"300px"}}/>
                    </div>
                    <div className="flip-card-back" style={{background:props.bg,color:props.color}}>
                    <h3>{props.show}</h3> 
                    <p>{props.price}դրամ/ամիս</p> 
                    <p>{props.attributes.map(e=><span key={e.id}>{e.name} /</span>)}</p>
                    <p>Ընդհանուր տևողությունը {props.monts} ամիս </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;