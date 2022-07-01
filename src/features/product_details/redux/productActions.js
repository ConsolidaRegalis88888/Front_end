import getProductById from "../domain/use_case/getProductById";

export const getProductAction = (id) => {
    return dispatch => {
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

export const productLoadedAction = (data)=>({
    type:TYPE_PRODUCT_LOADED,
    payload:data
});

export const productErrorAction = (message)=>({
    type:TYPE_PRODUCT_ERROR,
    payload:message
});