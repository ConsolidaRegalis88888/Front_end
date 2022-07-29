import BlogRepository from "../../domain/BlogRepository";
import FakeAPI from "../api/fakeAPI";

export default class BlogNetworkRepository implements BlogRepository
{
   async getAllPosts(page: number): Promise<any> {
        const res = await FakeAPI.getAllPosts(page)
        return new Promise(resolve => {
            resolve(res)
        });
    }

    async getSinglePost(idPost: string): Promise<any>
    {
        const res = await FakeAPI.getSinglePost(idPost);
        return new Promise(resolve =>
        {
            resolve(res)
        });
    }
}