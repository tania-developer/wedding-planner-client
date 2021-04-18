import React from 'react';
import logo from '../../../images/logo.png';
const Footer = () => {
    return (
        <footer className="container-fluid text-center pt-5 pb-5" style={{backgroundColor: '#FFF9F3'}}>
            <div className="mb-4">
                <img
                    alt=""
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
           <h3 style={{display:'inline', fontFamily: "'Cinzel Decorative', cursive"}} className= 'logo-text'>Wedding</h3>
            </div>
            <p>2404 Redwood Ct, Auburn, WA 98092, USA</p>
            <p>(+1) 207 187 1989</p>
            <p>contact@yourwebsite.com</p>
            <small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
        </footer>
    );
};

export default Footer;