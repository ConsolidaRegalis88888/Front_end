import React from 'react';
import '../data/api/fakeAPI'
import '../styles/product.css'

const CartProduct = (props) => {
    return (
        <div>
            {props.cartProducts?.map((product) => (
                <div key={product.id}  className={'productContainer'}>
                    <div className={'cartItem'}>
                        <div className={'imageBox'}>{product.image}</div>
                        <div className={'about'}>
                            <div className={'productId'}>#{product.id}</div>
                            <div className={'productName'}>{product.name}</div>
                            <div className={'productDesc'}>{product.description}</div>
                            <div>
                                <div>
                                    <select>
                                        <option value={''}>{product.sizes[0]?.name}</option>
                                    </select>
                                </div>
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