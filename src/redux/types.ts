import Product from "../features/product_details/data/model/Product";
import ProductInList from "../features/product_details/data/model/ProductInList";
import SinglePost from "../features/blog/data/model/SinglePost";

export interface Store{
    product:ProductPageInfo,
    blog: BlogPageInfo,
}

export interface ProductPageInfo{
    loading: Boolean,
    data: Product,
    error: string,
    recommendedList: Array<ProductInList>,
}

export interface BlogPageInfo{
    loading: Boolean,
    data: SinglePost,
    error: string,
    allPosts: Array<SinglePost>,
}