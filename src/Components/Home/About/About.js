import React from 'react';
import bride from '../../../images/bride.jpg';
import cake  from '../../../images/cake.jpg';
import Couple from '../../../images/couple.jpg';
import Flower from '../../../images/flower.jpg';

const About = () => {
    return (
        <section style={{backgroundColor: '#FFF9F3'}}>
            <div className="text-center pt-5">
            <p>about us</p>
            <h2>We plan every detail of <br/> your wedding</h2>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, reprehenderit ipsum.<br/> Quasi, architecto! Magnam nulla quod blanditiis animi.Nam totam nulla expedita.<br/> laborum fugit quidem commodi consequatur officia quis ut.
           </small>
            </div>
           <div className="container">
           <div className="row pb-5">
                <div className="col-md-7 mt-3 pr-1">
                    <img src={bride} alt="" style={{height:'300px', width: '100%'}}/>
                </div>
                <div className="col-md-5 mt-3 pr-1">
                <img src={cake} alt="" style={{height:'300px', width: '100%'}}/>
                </div>
            
           
                <div className="col-md-5 mt-3 pr-1">
                <img src={Couple} alt="" style={{height:'300px', width: '100%'}}/>
                </div>
                <div className="col-md-7 mt-3 pr-1">
                <img src={Flower} alt="" style={{height:'300px', width: '100%'}}/>
                </div>
          </div>
           </div>
        </section>
    );
};

export default About;