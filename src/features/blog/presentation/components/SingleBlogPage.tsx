import React from 'react';
// @ts-ignore
import styles from './singleBlogPage.module.css';
import {useParams} from "react-router-dom";
import SinglePost from "../../data/model/SinglePost";
interface Props{
    post: SinglePost
}

const SingleBlogPage: React.FC<Props> = (props:Props) => {

    let {idPost} = useParams<string>();

    return <h1>Hello! {idPost}
        {JSON.stringify(props.post)}</h1>

    /*return <>
        <div className={styles.singlePost}>
            <div className={styles.mainTitle}>
                <h2>{mainTitle}</h2>
            </div>
            <div className={styles.dateOfPost_clock}>
                <img src={imageClock} className={styles.clock}/>
                <div className={styles.dateOfPost}>{dateOfPost}</div>
            </div>
            <div className={styles.text1}>{postText1}</div>
            <h2 className={styles.titleInPost1}>{titleInPost1}</h2>
            <div className={styles.text2}>{postText2}</div>
            <img className={styles.mainPostImage} src={mainPostImage}/>
            <div className={styles.text3}>{postText3}</div>
            <h2 className={styles.titleInPost2}>{titleInPost2}</h2>
            <div className={styles.text4}>{postText4}</div>
            <div>
                <img className={styles.postImage1} src={postImage1}/>
                <img className={styles.postImage2} src={postImage2}/>
            </div>

        </div>
    </>*/
};

export default SingleBlogPage;
//<div>{JSON.stringify(blog.data)}</div>