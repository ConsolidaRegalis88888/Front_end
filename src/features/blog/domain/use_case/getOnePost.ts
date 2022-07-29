import BlogNetworkRepository from "../../data/repository/BlogNetworkRepository";

export default async function getSinglePost(idPost: string)
{
    return new BlogNetworkRepository().getSinglePost(idPost)
}