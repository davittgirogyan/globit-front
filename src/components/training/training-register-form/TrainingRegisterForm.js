import React from 'react';
import { useForm } from 'react-hook-form';
import FormField from './FormField/FormFIeld';
// import style from './TraginingRegisterForm.module.css';

const TrainingRegisterForm = (props)=>{
    const {orerJamer,shabatOrer,courses,formData}= props;

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
      };
    return(
        <form onSubmit={handleSubmit(onSubmit)} >
                {formData.map((e)=>{
                    let options;
                    if(e.tagType==='select'){
                        if(e.name==='course'){options=courses}
                        else if(e.name==='hours'){options=orerJamer}
                        else if(e.name==='days'){options=shabatOrer}
                    }
                    return <FormField  key={e.id} register={register} errors={errors} {...e} options={options}/>
                })}

            <button type="submit" >Submit</button>
        </form>
    )
}

export default TrainingRegisterForm