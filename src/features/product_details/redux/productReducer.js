import * as Actions from "./productActions"

const initialState = {
    loading: false,
    data: {},
    error: ""
}

export function productReducer(state = initialState, action)
{
    switch (action.type) {
        case Actions.TYPE_PRODUCT_LOAD: {
            return {...state, loading: true, data: {}};
        }
        case Actions.TYPE_PRODUCT_LOADER: {
            return {...state, loading: false, data: action.payload};
        }
        case Actions.TYPE_PRODUCT_ERROR: {
            return {...state, loading: false, data: {}, error: action.payload};
        }
        default: {
            return state;
        }
    }
}