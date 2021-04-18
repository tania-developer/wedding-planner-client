import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageProduct = () => {
    const [allService, setAllService] = useState([]);
    console.log(allService);
    useEffect(() => {
        fetch('https://damp-chamber-87817.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])

    const deleteProduct=(id)=>{
            fetch(`https://damp-chamber-87817.herokuapp.com/delete/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
      
            <div className='row' style={{width:'100%'}}>
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
                   {
                       allService.map(sr=> <Card className='mb-3'>
                        
                        <Card.Body>
                          <Card.Title>{sr.name}</Card.Title>
                          <Card.Text>
                            {sr.details}
                          </Card.Text>
                          <button onClick={()=>deleteProduct(sr._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </Card.Body>
                      </Card>

                    )}
            </div>
        </div>
      
    );
};

export default ManageProduct;