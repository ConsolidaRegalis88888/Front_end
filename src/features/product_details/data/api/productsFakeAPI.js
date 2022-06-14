import ProductInList from "../model/ProductInList";

export default class productsFakeAPI {
    static getProductsById = async (id) => {
        return new Promise( resolve => {
            setTimeout(()=>{
                resolve()
            }, 3000)
        })
    }

    static getByCategory = async (page) => {
        return new Promise(resolve => {
            setTimeout(() =>{
                resolve(productsByCategory)
            }, 3000)
        })
    }

}

const productsByCategory = [
    new ProductInList(6, 'Basic t-shirts', 35, 0, '', 2),
    new ProductInList(7, 'Basic t-shirts', 35, 0, '', 2),
    new ProductInList(8, 'Basic t-shirts', 35, 0, '', 3),
    new ProductInList(9, 'Basic t-shirts', 35, 0, '', 2),
    new ProductInList(10, 'Basic t-shirts', 35, 0, '', 5),
    new ProductInList(11, 'Basic t-shirts', 35, 15, '', 2),
    new ProductInList(12, 'Basic t-shirts', 35, 45, '', 2.5),
    new ProductInList(13, 'Basic t-shirts', 35, 0, '', 2.5),
    new ProductInList(14, 'Basic t-shirts', 35, 0, '', 2.5),
]