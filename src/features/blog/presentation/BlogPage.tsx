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

    useEffect(() => {
        console.log(idPost);
        dispatch(getAllPostsAction(allPosts));
    }, [allPosts]);

    return (loading) ?
        <h1>Loading...</h1> :
        <div>
            <SingleBlogPage
                idPost={blog.idPost}
                mainTitle={blog.mainTitle}
                imageClock={blog.imageClock}
                dateOfPost={blog.dateOfPost}
                mainPostImage={blog.mainPostImage}
                postImage1={blog.postImage1} postImage2={blog.postImage2}
                postText1={blog.postText1} postText2={blog.postText2} postText3={blog.postText3} postText4={blog.postText4}
                titleInPost1={blog.titleInPost1} titleInPost2={blog.titleInPost2}/>
            <AllPosts/>
        </div>
};

export default BlogPage;
