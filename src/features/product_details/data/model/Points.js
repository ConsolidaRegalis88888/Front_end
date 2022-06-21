export default class Points
{
    id
    product_id
    point
    date
    customer_id
    is_ignore

    constructor(id, product_id, point, date, customer_id, is_ignore) {
        this.id = id;
        this.product_id = product_id;
        this.point = point;
        this.date = date;
        this.customer_id = customer_id;
        this.is_ignore = is_ignore;
    }
}