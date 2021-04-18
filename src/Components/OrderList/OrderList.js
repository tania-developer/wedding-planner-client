import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);
    console.log(order);

    const email = loggedInUser.email;


    useEffect(() => {
        fetch('https://damp-chamber-87817.herokuapp.com/getOrder?email='+email)
            .then(res => res.json())
            .then(data => setOrder(data))
                
            
    }, [])
    return (
        <div className='row' style={{width:'100%'}}>
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10 mt-5">
            <h5> Check Order <span style={{marginRight: '0'}}>{loggedInUser.name}</span>  </h5>
                {
                    order.map(or=><Card style={{ width: '28rem', marginBottom: '20px' }}>
                    {/* <Card.Img variant="top" src={`data:image/png;base64,${or.image.img}`} /> */}
                    <Card.Body>
                      <Card.Title>{or.service}</Card.Title>
                      <Card.Text>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni placeat, ipsum est temporibus in nihil tempora.
                      </Card.Text>
                      <Button variant="primary">pendingS</Button>
                    </Card.Body>
                  </Card>)
                }
            </div>
        </div>
    );
};

export default OrderList;