export default interface BlogRepository{
    getSinglePost: (idPost: string) => Promise<any>;
    getAllPosts: (page: number) => Promise<Array<any>>;
}
