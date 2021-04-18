import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic from '../../../images/Ellipse 91.png'
import './Review.css'
const Review = () => {
    const [review, setReview] = useState([])
    
    useEffect( () => {
        fetch('https://damp-chamber-87817.herokuapp.com/getReview')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <section style={{backgroundColor: '#F3DCCF'}} className="pb-5">
            <h3 className="text-center my-5 pt-5">What our client <br /> are sayings </h3>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                   { 
                    review.map(rv => <div>
                        <img src={`data:image/png;base64,${rv.image.img}`} />
                        <div className="myCarousel">
                            <h3>{rv.name}</h3>
                            <h4>{rv.title}r</h4>
                            <p>
                                {rv.details}
                           </p>
                        </div>
                    </div>)
                   }
                </Carousel>
            
        </section>
    );
};

export default Review;