export default class Post
{
    idPost // String or number
    mainTitle   //String
    dateOfPost   //date or number
    mainPostImage   //file

    constructor(idPost, mainTitle, dateOfPost, mainPostImage) {
        this.idPost = idPost;
        this.mainTitle = mainTitle;
        this.dateOfPost = dateOfPost;
        this.mainPostImage = mainPostImage;
    }
}
