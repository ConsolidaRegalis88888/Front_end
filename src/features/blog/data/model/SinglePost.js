import Post from "./Post";

export default class SinglePost extends Post
{
    postText1   //String
    titleInPost1    //String
    postText2  //String
    postText3   //String
    titleInPost2    //String
    postText4   //String
    postImage1   //file
    postImage2   //file

    constructor(idPost, mainTitle, imageClock, dateOfPost, mainPostImage, postText1, titleInPost1, postText2, postText3, titleInPost2, postText4, postImage1, postImage2) {
        super(idPost, mainTitle, imageClock, dateOfPost, mainPostImage);
        this.postText1 = postText1;
        this.titleInPost1 = titleInPost1;
        this.postText2 = postText2;
        this.postText3 = postText3;
        this.titleInPost2 = titleInPost2;
        this.postText4 = postText4;
        this.postImage1 = postImage1;
        this.postImage2 = postImage2;
    }

}
