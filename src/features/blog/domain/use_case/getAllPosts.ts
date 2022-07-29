import BlogRepository from "../../data/repository/BlogNetworkRepository";

export default async function getAllPosts(page:number)
{
    return new BlogRepository().getAllPosts(page)
}