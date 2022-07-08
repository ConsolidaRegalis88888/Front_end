import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogAction} from "../redux/blogActions";
import SingleBlogPage from "./components/SingleBlogPage";
import AllPosts from "./components/AllPosts";

const BlogPage = () => {
    let {idPost} = useParams();
    const dispatch = useDispatch();
    const {blog} = useSelector(state => state);

    useEffect(()=>{
        console.log(idPost);
        dispatch(getBlogAction(idPost));
    }, [idPost]);

    return (
        (blog.loading) ?
            <h1>Loading...</h1> :
            (blog.showAll) ? <SingleBlogPage/> : <AllPosts/>)

};

export default BlogPage;
//<SingleBlogPage/> : <AllPosts/>   <AllPosts/> : <SingleBlogPage/>
//     )