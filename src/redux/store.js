import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {productReducer} from "../features/product_details/redux/productReducer";
import {blogReducer} from "../features/blog/redux/blogReducer";

const store = createStore(combineReducers({
    product: productReducer,
    blog: blogReducer,
}),
    {}, applyMiddleware(thunk, logger)
);

export default store;