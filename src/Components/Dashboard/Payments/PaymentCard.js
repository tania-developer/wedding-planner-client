import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

//import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
 // const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const PaymentCard = ({bookingData}) => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload= await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    
    if(payload.error){
        setPaymentError(payload.error.message);
        setPaymentSuccess(null);
    }else{
        setPaymentSuccess(payload.paymentMethod.id);
        setPaymentError(null);
        payload.paymentMethod.billing_details.name = bookingData.name;

        const bkData = {
          name: bookingData.name,
          email: bookingData.email,
          service: bookingData.service,
          paymentId: payload.paymentMethod.id,
          date: new Date()

        }
        fetch('https://damp-chamber-87817.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bkData)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                // closeModal();
                // alert('Appointment created successfully.');
                console.log('success');
            }
        })
        console.log("[PaymentMethod]", payload);
     }
   
  };

  return (
      <div>
           <form onSubmit={handleSubmit}>
    
      <label>
        Card Number
        <CardNumberElement
          options={options}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
     {
        (paymentError) && <p className="text-center">{paymentError}</p>
      }

     {
        (paymentSuccess) && <p className="text-center" style={{color:'green'}}>Your Payment was successful!</p>
      }
      </div>
     );
};

export default PaymentCard;
