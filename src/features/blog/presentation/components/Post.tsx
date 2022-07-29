import React from 'react';
import {useSelector} from "react-redux";

import {Store} from "../../../../redux/types";
import SinglePost from "../../data/model/SinglePost";

const Post = () => {
    const blog = useSelector<Store, SinglePost>(state => state.blog.data);

    return (
        <div>
            <div>{blog.idPost}</div>
            <div>{blog.dateOfPost}</div>
            <img src={blog.mainPostImage}/>
            <div>{blog.mainTitle}</div>
        </div>
    );
};

export default Post;