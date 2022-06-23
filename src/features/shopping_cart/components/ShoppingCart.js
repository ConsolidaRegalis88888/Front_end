import React, {useEffect, useState} from 'react';
import '../data/api/fakeAPI'
import Summary from "./Summary";
import CartProduct from "./CartProduct";
import '../styles/cart.css'

const ShoppingCart = () => {
    const [cart, setCart] = useState({
        cart: {}
    });

    useEffect(() => {
        fetch('api/cart')
            .then((res) => res.json())
            .then((json) => {
                setCart(json.cart)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <div className={'Cart-Container'}>
            <div className={'Headline'}>Cart</div>
            <CartProduct cartProducts={cart.cartProducts}/>
            <Summary summary={cart.summary}/>
        </div>
    )
}

export default ShoppingCart;