import React, { createRef } from 'react';
import style from '../Training.module.css';
import { connect } from 'react-redux';
import TrainingRegisterForm from './../training-register-form/TrainingRegisterForm';
import TrainingCourses from '../training-courses/TrainingCourses';

const TrainingModal = (props)=>{

    const modal     = createRef();
    const modal2    = createRef()
    return(
        <>
        <div id="myModal" ref={modal}  className="modal">
            <div className="modal-content">
                <span className="close" onClick={()=>{modal.current.style.display = "none"}}>&times;</span>
                <div id='register_div'>
                    <TrainingRegisterForm {...props}/>
                </div>
            </div>
        </div>
        <div id="myModal2" ref={modal2}  className="modal2">
            <div className="modal-content2">
                <span className="close2" onClick={()=>{modal2.current.style.display = "none"}}>&times;</span>
                <div id='register_div1'>
                    <TrainingCourses courses={props.courses}/>
                </div>
            </div>
        </div>
        <div className={style.register} id="myBtn"  >

            <button className={style.button} onClick={()=>{  modal.current.style.display = "block";}}><span>Գրանցվել դասընթացների</span></button>
            <button className={style.button} onClick={()=>{  modal2.current.style.display = "block";}}><span>Դասընթացների կուրսեր</span></button>
        </div>
            </>
    )
}

let mapStateToProps = (state)=>({
    orerJamer:state.training.orerJamer,
    shabatOrer:state.training.shabatOrer,
    courses:state.training.courses,
    formData:state.training.formData
});

export default connect(mapStateToProps)(TrainingModal);