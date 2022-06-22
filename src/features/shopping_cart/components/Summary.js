import React, {useEffect, useState} from 'react';
import '../data/api/fakeAPI'
import '../styles/summary.css'
import AppliedPromo from "./AppliedPromo";

const Summary = () => {
    const [summary, setSummary] = useState({
        subtotalPrice: null,
        shippingPrice: null,
        totalPrice: null
    });

    useEffect(() => {
        fetch('api/cart/summary')
            .then((res) => res.json())
            .then((json) => {
                setSummary({
                    subtotalPrice: json.subtotalPrice,
                    shippingPrice: json.shippingPrice,
                    totalPrice: json.totalPrice
                })
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={'container'}>
            <div className={'title'}>Summary</div>
            <AppliedPromo/>
            <div className={'subtotal'}>
                <div>Subtotal</div>
                <div>{summary.subtotalPrice}</div>
            </div>
            <div>
                <div>Estimated Shipping & Handling</div>
                <div>{summary.shippingPrice}</div>
            </div>
            <hr/>
            <div>
                <div>Total</div>
                <div>{summary.totalPrice}</div>
            </div>
            <hr/>
            <button>Checkout</button>
        </div>
    );
};

export default Summary;