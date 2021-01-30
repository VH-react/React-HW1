import apiClient from "../../../api-client"

export const FETCH_PRODUCT_LOADING = 'FETCH_PRODUCT_LOADING';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

export const fetchProducts = () => async dispatch => {
    dispatch({ type: FETCH_PRODUCT_LOADING });
    try {
        const data = await apiClient.get('/products').then(response => response.data);
        dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: FETCH_PRODUCT_ERROR,
            payload: err.message
        });
        throw err;
    }
};
