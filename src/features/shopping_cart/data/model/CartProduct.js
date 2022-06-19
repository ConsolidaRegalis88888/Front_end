export default class CartProduct{
    id // string
    name // string
    description // string
    size // string
    price // double
    discount // int
    image // string
    quantity // int

    constructor(id, name, description, size, price, discount, image, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.size = size;
        this.price = price;
        this.discount = discount;
        this.image = image;
        this.quantity = quantity;
    }
}