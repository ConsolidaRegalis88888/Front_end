import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "@types/react";
import {getBlogAction} from "../../redux/blogActions";
import styles from "./singleBlogPage.module.css";
import Post from "./Post";

const AllPosts = () => {
    let {idPost} = useParams();
    const dispatch = useDispatch();
    const {blog} = useSelector(state => state);

    useEffect(()=>{
        console.log(idPost);
        dispatch(getBlogAction(idPost));
    }, [idPost]);

    return <>
        <div className={styles.allPosts}>
            {blog.data.posts.map(p =>
            <Post key={p.idPost} />)}
        </div>
    </>
};

export default AllPosts;
