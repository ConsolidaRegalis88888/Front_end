
import getSinglePost from "../domain/use_case/getOnePost";
export const TYPE_BLOG_LOAD = "TYPE_BLOG_LOAD";
export const TYPE_BLOG_LOADER = "TYPE_BLOG_LOADER";
export const TYPE_BLOG_ERROR = "TYPE_BLOG_ERROR";

export const blogLoadAction = () => ({type: TYPE_BLOG_LOAD});
export const blogLoadedAction = (data) => ({type: TYPE_BLOG_LOADER, payload: data});
export const blogErrorAction = (message) => ({type: TYPE_BLOG_ERROR, payload: message});

export const getBlogAction = (idPost) =>
{
    return dispatch =>{
        dispatch(blogLoadAction());
        getSinglePost(idPost).then((data) =>
        {
            dispatch(blogLoadedAction(data));
        }).catch((error) =>
        {
            dispatch(blogErrorAction(error.message));
        })

    }
};