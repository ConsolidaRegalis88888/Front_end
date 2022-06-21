import {blogRepository} from "../BlogRepository";

export default async function getBlog()
{
    return blogRepository().getAllPosts()
}