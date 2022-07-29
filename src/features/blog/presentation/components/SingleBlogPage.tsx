import React from 'react';
// @ts-ignore
import styles from './singleBlogPage.module.css';
interface BlogProps{
    idPost: string
    mainTitle: string
    imageClock: any //string
    dateOfPost: string
    mainPostImage: any //string
    postText1: string
    titleInPost1: string
    postText2: string
    postText3: string
    titleInPost2: string
    postText4: string
    postImage1: any
    postImage2: any
}
const SingleBlogPage: React.FC<BlogProps> = ({mainTitle, imageClock, idPost,postImage1, mainPostImage, postImage2, postText2, postText4, postText3, postText1, titleInPost2, titleInPost1, dateOfPost}) => {

    return <>
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
    </>
};

export default SingleBlogPage;
//<div>{JSON.stringify(blog.data)}</div>