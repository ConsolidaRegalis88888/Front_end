import Product from "../model/Product";
import Tag from "../model/Tag";
import Manufacturer from "../model/Manufacturer";
import Category from "../model/Category";
import Photo from "../model/Photo";
import Option from "../model/Option";
import ProductInList from "../model/ProductInList";

export default class FakeAPI
{
    static getProductById = async (id: string)=>{
        // fetch
        return new Promise( resolve=>{
                setTimeout(()=>{
                    resolve(fakeProduct)
                },3000)
            }
        )
    }

    static getRecommended = async (page:number=1) => {
        return new Promise( resolve=>{
                setTimeout(()=>{
                    resolve(productsRecommended)
                },3000)
            }
        )
    }

    static addToBag = async (token: string, id: string)=>{}
}

const productsRecommended = [
    new ProductInList("2", "Basic t-shirt", 35, 0, "", 4),
    new ProductInList("3", "Basic t-shirt", 35, 15, "", 1),
    new ProductInList("4", "Basic t-shirt", 35, 0, "", 2),
    new ProductInList("5", "Basic t-shirt", 35, 15, "", 1),
]

const fakeProduct = new Product("1",
    "Basic T-shirt", "12345",
    55,  true,45,
    [new Tag("1", "t-shirt","1"),
        new Tag("2", "men","1")],
    new Manufacturer("1", "Manufacturer test","",""),
    [new Category("1", "Men","",true,[],"",1,""),
        new Category("2", "T-shirts","",true,[],"",1,"")],
    "The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.",
    4,
    [new Photo("1", "1", "1.jpg"),
        new Photo("2", "1", "2.jpg"),
        new Photo("3", "1", "3.jpg"),
        new Photo("4", "1", "4.jpg")],
    [new Option("1","L / 14 US", "1"),
        new Option("2","M / 12 US", "1"),
        new Option("3","XL / 16 US", "1")],4
)


/*import Product from "../model/Product";
import Tag from "../model/Tag";
import Manufacturer from "../model/Manufacturer";
import Category from "../model/Category";
import Photo from "../model/Photo";
import Option from "../model/Option";
import ProductInList from "../model/ProductInList";
import {createServer} from "miragejs";

createServer({
   // models:{detailedProduct: DetailedProduct, shortProduct: ShortProduct},
    routes(){
        this.namespace = "http://www.ecommerce.il"

        this.get("/product/:id", (schema, request) => {
            let id = request.params.id;
            fakeProduct.setId(id);
            return fakeProduct;
        })

        this.get("/recommended/:page", (schema, request) => {
            let page = request.params.page;
            return productsRecommended;
        })

        this.post("/add_to_bag", (schema, request)=>{
            return {code:200}
        })
    }
});

const productsRecommended =[
    new ProductInList(2, "Basic T-shirt", 35, 0, "", 4),
    new ProductInList(3, "Basic T-shirt", 35, 15, "", 1),
    new ProductInList(4, "Basic T-shirt", 35, 0, "", 2),
    new ProductInList(5, "Basic T-shirt", 35, 15, "", 1),
]

const fakeProduct = new Product(
    1,
    "Basic T-shirt",
    "12345",
    55,
    45,
    true,
    5,
    [new Tag(1, "men", 1)],
    new Manufacturer(1, "Manufacturer test"),
    [
        new Category(1, "Men"),
        new Category(2, "T-shirts")
    ],
    "The T-Shirt sets you up with soft cotton jersey and a classic logo with camo on the chest.",
    4,
    [
        new Photo(1, 1, '1.ipg'),
        new Photo(2, 1, '2.ipg'),
        new Photo(3, 1, '3.ipg'),
        new Photo(4, 1, '4.ipg'),
    ],
    [
        new Option(1, "L / 14 US", 1),
        new Option(2, "M / 12 US", 1),
        new Option(3, "XL / 16 US", 1),
    ]
)
*/
