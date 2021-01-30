import { FETCH_PRODUCT_ERROR, FETCH_PRODUCT_LOADING, FETCH_PRODUCT_SUCCESS } from '../actions/products';

const initialState = {
    data: [],
    loading: false,
    error: null
};

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                data: [],
                loading: false,
                error: action.payload
            };
        default: return state;
    }
}

export default productsReducer;
