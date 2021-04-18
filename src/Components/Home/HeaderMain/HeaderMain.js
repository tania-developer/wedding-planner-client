import React from 'react';
import banner from '../../../images/banner.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div style={{height:'600px'}}>
            <div>
                <img src={banner} className="main-img" style={{height:'600px'}}/>
            </div>
            <div className="center">
                <h2 className="text-center">Welcome to</h2>
                <h1 className="text-center">Wedding Planner</h1>
                <h2 className="text-center">Wedding Dream Comes True</h2>
            </div>
            
        </div>
    );
};

export default HeaderMain;