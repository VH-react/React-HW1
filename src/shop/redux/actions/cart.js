export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export const addToCart = id => ({
    type: ADD_PRODUCT_TO_CART,
    payload: id
});

export const removeFromCart = id => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id
});