import getProductById from "../domain/use_case/getProductById";
import Product from "../data/model/Product";

export const getProductAction = (id: string) => {
    return (dispatch: Function) => {
        dispatch(productLoadAction());
        getProductById(id).then((data)=>{
                dispatch(productLoadedAction(data));
            }
        ).catch((error)=>{
            dispatch(productErrorAction(error.message));
        })
    }
};

export const TYPE_PRODUCT_LOAD = "TYPE_PRODUCT_LOAD";
export const TYPE_PRODUCT_LOADED = "TYPE_PRODUCT_LOADED";
export const TYPE_PRODUCT_ERROR = "TYPE_PRODUCT_ERROR";

export const productLoadAction = ()=>({
    type:TYPE_PRODUCT_LOAD
});

export const productLoadedAction = (data: Product)=>({
    type:TYPE_PRODUCT_LOADED,
    payload:data
});

export const productErrorAction = (message: string)=>({
    type:TYPE_PRODUCT_ERROR,
    payload:message
});