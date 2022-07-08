import {blogRepository} from "../BlogRepository";

export default async function getSinglePost()
{
    return blogRepository().getSinglePost()
}