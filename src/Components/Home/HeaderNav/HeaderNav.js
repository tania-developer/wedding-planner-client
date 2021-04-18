import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../../images/logo.png';

const HeaderNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="light" className='container'>
            <Navbar.Brand href="#home">
             <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Wedding</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Booking</Nav.Link>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderNav;