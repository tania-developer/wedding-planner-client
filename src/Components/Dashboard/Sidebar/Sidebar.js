import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt,faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log(isAdmin);

    const email = loggedInUser.email;

     useEffect(() => {
        fetch('https://damp-chamber-87817.herokuapp.com/admin?email='+email)
            .then(res => res.json())
            .then(data => {
               console.log(data[0]);
                if(data[0]==undefined){
                    setIsAdmin(true)
                }
                
            })
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4 " style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="text-white">
                         <FontAwesomeIcon icon={faCalendar} /> <span>Booking</span>
                    </Link>
                </li>
                <li>
                    {!isAdmin ? <Link to="/bookinglist" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                    </Link>:
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Order List</span>
                    </Link>}
                </li>
                <li>
                    <Link to="/review" className="text-white">
                         <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                     </Link>
                </li>
                {!isAdmin && 
                <div>
                    
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>
                 }
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;