import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Sidebar/Sidebar';


const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch('https://damp-chamber-87817.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                console.log('succes');
            }
        })
      console.log(data);
    }
    return (
        <div style={{ backgroundColor: '#f5eae0', width: '100%' }} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Email</label>
                        <input {...register("email", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button>submit</button>
                    </form>
                </div>
            </div>
    );
};

export default AddAdmin;