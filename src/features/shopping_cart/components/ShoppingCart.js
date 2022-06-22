import React, {useEffect, useState} from 'react';
import '../data/api/fakeAPI'
import Summary from "./Summary";
import CartProduct from "./CartProduct";
import AppliedPromo from "./AppliedPromo";
import '../styles/cart.css'

const ShoppingCart = () => {
    const [cartDetails, setCartDetails] = useState({
        cartId: null,
        customerId: null
    });

    useEffect(() => {
        fetch('/api/cart')
            .then((res) => res.json())
            .then((json) => {
                setCartDetails({
                    cartId: json.cartId,
                    customerId: json.customerId
                })
            })
            .catch((err) => console.log(err))
    }, [])


    return(
        <div className={'Cart-Container'}>
            <div className={'Headline'}>Cart</div>
            <CartProduct/>
            <Summary/>
        </div>
    )
}

export default ShoppingCart;