export default class Post
{
    constructor(idPost: string, mainTitle: string, imageClock: any, dateOfPost: string, mainPostImage: any) {
        this.idPost = idPost;
        this.mainTitle = mainTitle;
        this.imageClock = imageClock;
        this.dateOfPost = dateOfPost;
        this.mainPostImage = mainPostImage;
    }
    idPost: string
    mainTitle: string
    imageClock: any //string
    dateOfPost: string
    mainPostImage: any //string
}
