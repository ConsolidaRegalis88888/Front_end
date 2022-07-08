import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBlogAction} from "../../redux/blogActions";
import styles from "./singleBlogPage.module.css"

const SingleBlogPage = () => {
    let {idPost} = useParams();
    const dispatch = useDispatch();
    const {blog} = useSelector(state => state);

    useEffect(()=>{
        console.log(idPost);
        dispatch(getBlogAction(idPost));
    }, [idPost]);

    return <>
        <div className={styles.singlePost}>
            <div className={styles.mainTitle}>
                <h2>{blog.data.mainTitle}</h2>
            </div>
            <div className={styles.dateOfPost_clock}>
                <img src={blog.data.imageClock} className={styles.clock}/>
                <div className={styles.dateOfPost}>{blog.data.dateOfPost}</div>
            </div>
            <div className={styles.text1}>{blog.data.postText1}</div>
            <h2 className={styles.titleInPost1}>{blog.data.titleInPost1}</h2>
            <div className={styles.text2}>{blog.data.postText2}</div>
            <img className={styles.mainPostImage}src={blog.data.mainPostImage}/>
            <div className={styles.text3}>{blog.data.postText3}</div>
            <h2 className={styles.titleInPost2}>{blog.data.titleInPost2}</h2>
            <div className={styles.text4}>{blog.data.postText4}</div>
            <div>
                <img className={styles.postImage1} src={blog.data.postImage1}/>
                <img className={styles.postImage2} src={blog.data.postImage2}/>
            </div>

        </div>
    </>
};

export default SingleBlogPage;
//<div>{JSON.stringify(blog.data)}</div>