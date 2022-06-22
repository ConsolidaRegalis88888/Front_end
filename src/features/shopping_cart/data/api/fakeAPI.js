import React from "react"
import { createServer } from "miragejs"

createServer({
    routes() {
        this.namespace = "api";

        this.get('/cart', () => {
            return {
                cartId: 1, customerId: 3
            }
        })

        this.get('/cart/products', (cartId) => {
            return {
                products: [{
                    id: 7142,
                    name: "Basic T-shirt",
                    description: "Black with print",
                    size: "L/14 US",
                    price: 35,
                    discount: 0,
                    image: "image.jpg",
                    quantity: 1
                },
                    {
                        id: 7114,
                        name: "Basic T-shirt",
                        description: "Purple",
                        size: "L/14 US",
                        price: 55,
                        discount: 20,
                        image: "image.jpg",
                        quantity: 1
                    }]
            }
        })
        this.get('/cart/summary', () => {
            return {
                subtotalPrice: 70, shippingPrice: 10, totalPrice: 80
            }
        })

        this.get('/cart/summary/promos', () => {
            return {
                appliedPromo: { name: "summer2022", discount: 23, savedAmount: 23.23}
            }
        })
    }
})