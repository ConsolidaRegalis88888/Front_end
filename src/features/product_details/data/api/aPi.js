export default class API
{
    static #serverDomain = "http://www.ecommerce.co.il"
    static getProductById = async (id) =>
    {
        return await fetch(`${this.#serverDomain}/product/${id}`);
    }

    static getRecommended = async (page = 1) =>
    {
        return await fetch(`${this.#serverDomain}/recommended/`);
    }

    static putToBag = async (token, id) =>{
        return await fetch(`${this.#serverDomain}/add_to_bag/`);
    }
}