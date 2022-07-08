export default class Product{
    id // string uuid!!
    name // string
    model // string
    price // number
    availability // boolean
    count // number
    tags // Tag
    manufacturer // Manufacturer
    category // Category
    comment // string
    rating_points // Points
    photos // Photo
    options // Option
    // ask to back-end
    sale // number

    constructor(id, name, model, price, sale, availability, count, tags, manufacturer, category, comment, rating_points, photos, options) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.price = price;
        this.sale = sale;
        this.availability = availability;
        this.count = count;
        this.tags = tags;
        this.manufacturer = manufacturer;
        this.category = category;
        this.comment = comment;
        this.rating_points = rating_points;
        this.photos = photos;
        this.options = options;
    }

    setId(id) {
        this.id = id;
    }
}