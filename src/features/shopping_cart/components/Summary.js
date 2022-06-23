import React from 'react';
import '../data/api/fakeAPI'
import '../styles/summary.css'
import AppliedPromo from "./AppliedPromo";

const Summary = (props) => {
    return (
        <div className={'container'}>
            <div className={'title'}>Summary</div>
            <AppliedPromo promo={props}/>
            <div className={'subtotal'}>
                <div>Subtotal</div>
                <div>{props.summary?.subtotalPrice}</div>
            </div>
            <div>
                <div>Estimated Shipping & Handling</div>
                <div>{props.summary?.shippingPrice}</div>
            </div>
            <hr/>
            <div>
                <div>Total</div>
                <div>{props.summary?.totalPrice}</div>
            </div>
            <hr/>
            <button>Checkout</button>
        </div>
    );
};

export default Summary;