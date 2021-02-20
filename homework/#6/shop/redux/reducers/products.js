import {CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILURE} from "../actions/types"

const initialState = {
    data: [],
    loading: false,
    error: null
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case CHECKOUT_FAILURE:
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
