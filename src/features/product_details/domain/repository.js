import FakeAPI from "../data/api/fakeAPI";

export function productRepository() {
    return {
        getProductById: async (id) => {
            const res = await FakeAPI.getProductById(id)
            return new Promise(resolve => {
                resolve(res)
            })
        },
        getRecommended: async (page) =>{
            const res = await FakeAPI.getRecommended(1)
            return new Promise(resolve => {
                resolve(res)
            })
        },
        addToBag: async (token, id) =>{
            const res = await FakeAPI.addToBag(token, id)
            return new Promise(resolve => {
                resolve(res)
            })
        }
    }
}