import React from 'react';
import './RecentWork.css'
import cake from '../../../images/cake2.jpg'
import bride from '../../../images/bride.jpg'


const RecentWork = () => {
    return (
        <section className="recent-sec container-fluid">
           <div className="masonry">
                <div className="box">
                    <img src={bride} alt=""/>
                </div>
                <div className="box">
                    <img src={bride} alt=""/>
                </div>
                <div className="box">
                    <img src={bride} alt=""/>
                </div>
                <div className="box">
                    <img src={bride} alt=""/>
                </div>
                <div className="box">
                    <img src={bride} alt=""/>
                </div>
                <div className="box">
                    <img src={bride} alt=""/>
                </div>
           </div>
        </section>
    );
};

export default RecentWork;