import React from 'react';
import './Service.css';
const Servie = (props)=>{

    const {header,text,img} = props
    return(
        <div className='single_service' >
            <div style={{width:"300px",margin:"0 auto"}}>
                <div className="single-course">
                <h3>{header}</h3> 
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className={`flip-card-front single_service`} style={{backgroundImage:`url(${img})`}}>
                        {/* <img src={img} alt="Avatar" style={{width:"300px",height:"300px",background:"transparent"}}/> */}
                        </div>
                        <div className="flip-card-back" style={{background:'transparent'}}>
                        {/* <h3>{header}</h3>  */}
                        <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Servie;