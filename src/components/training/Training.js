import React, { createRef, useEffect } from 'react';
import WithHeaderAndAnimate from '../../Hocs/WithHeaderAndAnimate';
import { connect } from 'react-redux';
import style from './Training.module.css';
import Loader from './../common/loader/Loader';
import TrainingSlider from './training-slider/TrainingSlider';
import TrainingModal from './training-modal/TrainingModal';

const Training = (props)=>{

    let slide = createRef();

    useEffect(()=>{
        slide.current.children[0].children[0].style.position = 'initial';
    },[slide]);
    return(
        <div className={style.main}>
            <div className={style.section1} >
                <Loader/>
                <h3 style={{display:"inline"}}>GLOBIT TRAINING CENTER</h3>
                <TrainingModal/>
                <div ref={slide}>
                    <TrainingSlider slider={props.slider}/>
                    {/* <h2>Modal Example</h2> */}
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state)=>({
    slider:state.training.slider
})

export default connect(mapStateToProps)(WithHeaderAndAnimate(Training));