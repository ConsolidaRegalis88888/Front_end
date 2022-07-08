import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "@types/react";
import {getBlogAction} from "../../redux/blogActions";

const Post = () => {
    let {idPost} = useParams();
    const dispatch = useDispatch();
    const {blog} = useSelector(state => state);

    useEffect(()=>{
        console.log(idPost);
        dispatch(getBlogAction(idPost));
    }, [idPost]);

    return (
        <div>
            <div>{blog.data.idPost}</div>
            <div>{blog.data.dateOfPost}</div>
            <img src={blog.data.mainPostImage}/>
            <div>{blog.data.mainTitle}</div>
        </div>
    );
};

export default Post;