import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllPostsAction, getSinglePostAction} from "../redux/blogActions";
import SingleBlogPage from "./components/SingleBlogPage";
import AllPosts from "./components/AllPosts";
import {Store} from "../../../redux/types";
import SinglePost from "../data/model/SinglePost";

const BlogPage: React.FC = (props) => {
    let {idPost} = useParams<string>();
    const blog = useSelector<Store, SinglePost>(state => state.blog.data);
    let [allPosts, setAllPosts] = useState<number>(1);

    const dispatch = useDispatch();
    const loading = useSelector<Store, Boolean>(state => state.blog.loading);

    useEffect(() => {
        console.log(idPost);
        dispatch(getSinglePostAction(idPost as string));
    }, [idPost]);

    /*useEffect(() => {
        console.log(idPost);
        dispatch(getAllPostsAction(allPosts));
    }, [allPosts]);*/

    return (loading) ?
        <h1>Loading...</h1> :
        <div>
            <SingleBlogPage post={blog}/>
            <AllPosts/>
        </div>
};

export default BlogPage;
