import React, {useEffect, useState} from 'react';
import '../data/api/fakeAPI'
import '../styles/product.css'

const CartProduct = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch('api/cart/products')
            .then((res) => res.json())
            .then((json) => {
                setCartProducts(json.products)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {cartProducts.map((product) => (
                <div key={product.id}  className={'productContainer'}>
                    <div className={'cartItem'}>
                        <div className={'imageBox'}>{product.image}</div>
                        <div className={'about'}>
                            <div className={'productId'}>{product.id}</div>
                            <div className={'productName'}>{product.name}</div>
                            <div className={'productDesc'}>{product.description}</div>
                            <div>
                                <div>{product.size}</div>
                                <div>{product.quantity}</div>
                            </div>
                        </div>
                        <div>
                            <div>{product.price}</div>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartProduct;