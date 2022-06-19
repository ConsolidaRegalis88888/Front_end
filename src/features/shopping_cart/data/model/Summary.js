export default class Summary {
    appliedPromos // list of applied promos
    subtotalPrice // double
    shippingPrice // double
    totalPrice // double

    constructor(appliedPromos, subtotalPrice, shippingPrice, totalPrice) {
        this.appliedPromos = appliedPromos;
        this.subtotalPrice = subtotalPrice;
        this.shippingPrice = shippingPrice;
        this.totalPrice = totalPrice;
    }
}