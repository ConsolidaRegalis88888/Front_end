import Post from "./Post";

export default class SinglePost extends Post
{
    postText1: string
    titleInPost1: string
    postText2: string
    postText3: string
    titleInPost2: string
    postText4: string
    postImage1: any
    postImage2: any

    constructor(idPost: string, mainTitle: string, imageClock: any, dateOfPost: string, mainPostImage: any, postText1: string, titleInPost1: string, postText2: string, postText3: string, titleInPost2: string, postText4: string, postImage1: any, postImage2: any) {
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
