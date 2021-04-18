import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const BookingList = () => {
    const [allBooking, setAllBooking] = useState([]);
    console.log(allBooking);
    useEffect(() => {
        fetch('https://damp-chamber-87817.herokuapp.com/getBooking')
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])
    return (
        <div className='row' style={{width:'100%'}}>
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
            <Table responsive="sm" className='mt-5'>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Email</th>
                        <th>Service Name</th>
                        <th>Pay With</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       allBooking.map(sr=> <tr>
                            <td>{sr.name}</td>
                            <td>{sr.email}</td>
                            <td>{sr.service}</td>
                            <td>Credit Card</td>
                            <td>pending</td>
                    </tr>

                    )}
                </tbody>
            </Table>
            </div>
        </div>
    );
};

export default BookingList;