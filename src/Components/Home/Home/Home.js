import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import RecentWork from '../RecentWork/RecentWork';
import ReviewSec from '../ReviewSec/ReviewSec';
import Services from '../Services/Services';
import HeaderMain from '../HeaderMain/HeaderMain';
import HeaderNav from '../HeaderNav/HeaderNav';

const Home = () => {
    return (
        <div>
            <HeaderNav/>
            <HeaderMain/>
            <About/>
            <Services/>
            <ReviewSec/>
            <Footer/>
           
        </div>
    );
};

export default Home;