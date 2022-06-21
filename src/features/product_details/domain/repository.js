//import FakeAPI from "../data/api/fakeAPI";
import { createServer } from "miragejs"

//let server = createServer()
//server.get("/product/1", { users: [{ id: 1, name: "Bob" }] })
export function productRepository(){
    return{
        getProductById: async (id)=>{
            const res = await fetch(`api/product/${id}`);
            return res;
        },
       /* getRecommended: async (page)=>{
            //const res = await FakeAPI.getProductById(id)
            return new Promise(resolve=>{
                resolve(res)
            });
        },
        addToBag: async (token, id)=>{
            const res = await FakeAPI.getProductById(id)
            return new Promise(resolve=>{
                resolve(res)
            });
        }*/
    }
}