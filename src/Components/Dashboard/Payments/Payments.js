import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe} from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';
import './PaymentCard.css'

const stripePromise = loadStripe('pk_test_51IhA8jIONyFepTvcI3c4tIgcVezLFk1cY7L991JYNCtNFTq5xJqbMflkVyX8DSUTYHLl7ReNRYRg1BCGWSzFPSOr00dKfpBafz');


const Payments = ({bookingData}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard bookingData={bookingData}/>
        </Elements>
    );
};

export default Payments;