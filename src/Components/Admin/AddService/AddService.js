import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const formData = new FormData()
        formData.append ('image', data.file[0]);
        formData.append ('name', data.name);
        formData.append ('details', data.description)
        fetch('https://damp-chamber-87817.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Service added successfully')
            })
            .catch(error => {
                console.error(error)
            })
       console.log(data);
    }
    return (
        <section>
            <div style={{ backgroundColor: '#f5eae0', width: '100%' }} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar />
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Service title</label>
                        <input {...register("name")} />
                        <label>Description</label>
                        <textarea type='textarea' {...register("description", { required: true })} />
                        <label>Image</label>
                        <input type='file' {...register("file", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button>submit</button>
                    </form>
                </div>
            </div>

        </section>

    );
};

export default AddService;