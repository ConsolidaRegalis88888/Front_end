import FakeAPI from "../data/api/fakeAPI";

export function productRepository() {
    return {
        getProductById: async (id) => {
            const res = await FakeAPI.getProductById(id)
            return new Promise(resolve => {
                resolve(res)
            });
        },

        getRecommended: async (page) =>{
            const res = await FakeAPI.getRecommended(page)
            return new Promise(resolve => {
                resolve(res)
            })
        },
        addToBag: async (token, id) =>{
            const res = await FakeAPI.putToBag(id)
            return new Promise(resolve => {
                resolve(res)
            });
        }
    }
}




/*import API from "../data/api/aPi";
export function productRepository() {
    return {
        getProductById: async (id) => {
            const res = await API.getProductById(id)
            return res;
        },

        getRecommended: async (page) =>{
            const res = await API.getRecommended(page)
            return new Promise(resolve => {
                resolve(res)
            })
        },
        addToBag: async (token, id) =>{
            const res = await API.putToBag(id)
            return new Promise(resolve => {
                resolve(res)
            });
        }
    }
}*/