import FakeAPI from "../data/api/fakeAPI";

export function blogRepository() {
    return {
        getAllPosts: async (page) => {
            const res = await FakeAPI.getAllPosts(page)
            return new Promise(resolve => {
                resolve(res)
            })
        }
    }
}