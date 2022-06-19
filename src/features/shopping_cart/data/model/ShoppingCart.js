export default class ShoppingCart{
    cartId // int
    customerId // int
    summary // summary object
    cartProducts // list of cart product objects


    constructor(cartId, customerId, summary, cartProducts) {
        this.cartId = cartId;
        this.customerId = customerId;
        this.summary = summary;
        this.cartProducts = cartProducts;
    }
}