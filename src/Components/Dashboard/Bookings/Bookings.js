import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Payments from '../Payments/Payments';
import './Bookings.css'
const Bookings = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [bookingData, setBookingData] = useState(null);
    const onSubmit = data =>{
      setBookingData(data);
      console.log(data);
    }
  
  
    return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{display: bookingData? 'none': 'block'}}>
      <label>Name</label>
      <input placeholder='Your name' {...register("name")} />
       <label>Email</label>
      <input placeholder='yourmail.com' {...register("email", { required: true })} />
      <label>Number</label>
      <input placeholder='0202020' {...register("number", { required: true })} />
      <label>Service name</label>
      <input defaultValue='Dress' {...register("service", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}    
      <button>submit</button>
    </form>
     <div style={{display: bookingData? 'block': 'none'}}>
       <Payments bookingData={bookingData}/>
     </div>

    </div>
    );
};

export default Bookings;