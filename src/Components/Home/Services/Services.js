import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [service, setService] = useState([])
    const [serviceItem, setServiceItem] = useState()
    
    useEffect( () => {
        fetch('https://damp-chamber-87817.herokuapp.com/getService')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    const handleService=(data) =>{
        setServiceItem(data);
            console.log(data);
    }
    return (
        <section style={{backgroundColor: '#F3DCCF'}} className="container-fluid">
            <div className="text-center pt-5 about-text">
                <p>Services</p>
                <h2>Everything we focus <br/>for full wedding service</h2>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing ipsum.<br/> Quasi,chitecto! Magnam nulla quod ulla  commodi consequatur.
                </small>
            </div>
            <div className="row container" style={{margin: '0 auto'}}>
               {
                  service.map(sv =><ServiceCard key={sv._id} handleService={handleService} service={sv}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;