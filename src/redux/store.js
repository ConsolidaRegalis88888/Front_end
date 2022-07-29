import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "../features/product_details/redux/productReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {signInReducer} from "../features/signin_detailes/redux/signInReducer";

const store = createStore(combineReducers({
        product:productReducer,
        signIn:signInReducer
    }),
    {}, applyMiddleware(thunk, logger)
);

export default store;