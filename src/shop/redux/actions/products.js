import apiClient from "../../../api-client"
import {CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAILURE} from "./types"

export const fetchProducts = () => async dispatch => {
    dispatch({ type: CHECKOUT_REQUEST });
    try {
        const data = await apiClient.get('/products').then(response => response.data);
        dispatch({
            type: CHECKOUT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: CHECKOUT_FAILURE,
            payload: err.message
        });
        throw err;
    }
};
