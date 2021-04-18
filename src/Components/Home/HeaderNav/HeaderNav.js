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
                width="35"
                height="35"
                className="d-inline-block align-top"
            />{' '}
           <h3 style={{display:'inline', fontFamily: "'Cinzel Decorative', cursive"}} className= 'logo-text'>Wedding</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#booking">Booking</Nav.Link>
                    <Nav.Link href="#login">Features</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderNav;