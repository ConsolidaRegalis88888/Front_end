export default class AppliedPromo {
    name // string
    discount // int
    savedAmount // double

    constructor(name, discount, savedAmount) {
        this.name = name;
        this.discount = discount;
        this.savedAmount = savedAmount;
    }
}