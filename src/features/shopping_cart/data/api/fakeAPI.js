import React from "react"
import { createServer } from "miragejs"

createServer({
    routes() {
        this.namespace = "api";

        this.get('/cart', () => {
            return {
                cart: {
                    cartId: 1,
                    customerId: 1,
                    summary: {
                        appliedPromos: [{
                            name: "summer2022",
                            discount: 10,
                            savedAmount: 3.5
                        }],
                        subtotalPrice: 31.5,
                        shippingPrice: 5,
                        totalPrice: 36.5
                    },
                    cartProducts: [
                        {
                            id: 7142,
                            name: "Basic T-shirt",
                            description: "Black with print",
                            sizes: [
                                {name:"L/14 US", value:"3", selected:"true"},
                                {name:"M/12 US", value:"2", selected:"false"}
                            ],
                            price: 35,
                            discount: 0,
                            image: "image.jpg",
                            quantity: 1
                        },
                        {
                            id: 7114,
                            name: "Basic T-shirt",
                            description: "Purple",
                            sizes: [
                                {name:"L/14 US", value:"3", selected:"true"},
                                {name:"M/12 US", value:"2", selected:"false"}
                            ],
                            price: 55,
                            discount: 20,
                            image: "image.jpg",
                            quantity: 1
                        }
                    ]
                }
            }
        })
    }
})