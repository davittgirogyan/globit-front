import React from 'react';
import WithHeaderAndAnimate from '../../Hocs/WithHeaderAndAnimate';
import style from './Servieces.module.css';
import Servie from './Service/Service';
import { connect } from 'react-redux';

const Services = (props)=>{
    return(
        <div className="section" id="section1" data-anchor="about" >
            <h1>Services</h1>
            <div className="about-text-block active" style={{opacity:"1"}}>
                <div className={style.service_div}>
                {props.services.map((e)=>{
                    return <Servie key={e.id} {...e}/>
                })}   
                </div>
            </div>
        </div>

    )
}
let mapStateToProps = (state)=>({
    services:state.services.services
})
export default WithHeaderAndAnimate(connect(mapStateToProps)(Services));