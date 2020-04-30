import React from 'react';
import style from '../../Training.module.css';
const FormField = (props)=>{
    let Field;
    if(props.tagType==='input'){
        Field = 
        <input
            name={props.name}
            type={props.type}
            ref={props.register(props.valid)}
        />
    }else if(props.tagType==='select'){
        Field = <select 
            name={props.name}
            ref={props.register(props.valid)}
            >
            {props.options.map(e=><option key={e.id} value={e.id}>{e.show}</option>)}
        </select>
    }
    return(
        <>
        <label>{props.label}</label>
        {Field}
        {(props.errors.name && props.name==='name') && <p className={style.formErr}>{props.errText}</p>}
        {(props.errors.tel && props.name==='tel') && <p className={style.formErr}>{props.errText}</p>}
        </>
    )
}
export default FormField