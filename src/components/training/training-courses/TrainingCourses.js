import React from 'react';
import Course from './Course/Course';

const TrainingCourses = (props)=>{
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {props.courses.map(e=><Course key={e.id} {...e} />)}
        </div>
    )
}

export default TrainingCourses;