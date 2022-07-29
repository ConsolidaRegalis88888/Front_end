import getSinglePost from "../domain/use_case/getOnePost";
import SinglePost from "../data/model/SinglePost";
import getAllPosts from "../domain/use_case/getAllPosts";

export const TYPE_SINGLE_POST_LOAD = "TYPE_SINGLE_POST_LOAD";
export const TYPE_SINGLE_POST_LOADER = "TYPE_SINGLE_POST_LOADER";
export const TYPE_SINGLE_POST_ERROR = "TYPE_SINGLE_POST_ERROR";

export const TYPE_BLOG_ALL_POSTS_LOAD = "TYPE_BLOG_ALL_POSTS_LOAD";
export const TYPE_BLOG_ALL_POSTS_LOADER = "TYPE_BLOG_ALL_POSTS_LOADER";
export const TYPE_BLOG_ALL_POSTS_ERROR = "TYPE_BLOG_ALL_POSTS_ERROR";

export const blogLoadAction = () => ({type: TYPE_SINGLE_POST_LOAD});
export const blogLoadedAction = (data: SinglePost) => ({type: TYPE_SINGLE_POST_LOADER, payload: data});
export const blogErrorAction = (message: string) => ({type: TYPE_SINGLE_POST_ERROR, payload: message});

export const blogAllPostsLoadAction = () => ({type: TYPE_BLOG_ALL_POSTS_LOAD});
export const blogAllPostsLoadedAction = (data: Array<SinglePost>) => ({type: TYPE_BLOG_ALL_POSTS_LOADER, payload: data});
export const blogAllPostsErrorAction = (message: string) => ({type: TYPE_BLOG_ALL_POSTS_ERROR, payload: message});

export const getSinglePostAction = (idPost: string): any => {
    return (dispatch: Function )=>{
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

export const getAllPostsAction = (page: number): any =>{
    return (dispatch: Function) =>{
        dispatch(blogAllPostsLoadAction());
        getAllPosts(page).then((data) => {
            dispatch(blogAllPostsLoadedAction(data));
        }).catch((error) =>{
            dispatch(blogAllPostsErrorAction(error.message));
        })
    }
};