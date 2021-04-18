import React from 'react';
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ServiceCard = ({service,handleService}) => {
    return (
        <Card  className=" my-5 text-center ml-5"style={{width: '18rem'}}>
            <Card.Img variant="top" src={`data:image/png;base64,${service.image.img}`} style={{width: '139px', margin:'0 auto',paddingTop: '20px'}} />
            <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                   {service.details}
                </Card.Text>
                <Link to="/booking"><button onClick={()=>handleService(service.name)} variant="primary">Book Now</button></Link>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;