import FakeAPI from "../data/api/fakeAPI";

export function blogRepository() {
    return {
        getSinglePost: async (idPost) => {
            const res = await FakeAPI.getSinglePost(idPost)
            return new Promise(resolve => {
                resolve(res)
            })
        },
        getAllPosts: async (page) => {
            const res = await FakeAPI.getAllPosts(page)
            return new Promise(resolve => {
                resolve(res)
            })
        }
    }
}