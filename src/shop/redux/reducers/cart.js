import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../actions/cart";

let initialState = [];

try {
    initialState = JSON.parse(localStorage.getItem('products') || '[]')
} catch (e) {
    console.log('Error')
}

export default function cartReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART: {
            const productInBasket = state.find(cartProduct => cartProduct.id === action.payload);
            if (!productInBasket) return [...state, { id: action.payload, quantity: 1 }];
                return state.map(cartProduct => cartProduct === productInBasket ? ({ ...productInBasket, quantity: productInBasket.quantity + 1 }) : cartProduct)
            }
        case REMOVE_PRODUCT_FROM_CART: {
            const productInBasket = state.find(cartProduct => cartProduct.id === action.payload);
            if (productInBasket.quantity === 1) {
                return state.filter(cartProduct => cartProduct.id !== action.payload);
            }
            return state.map(cartProduct => cartProduct === productInBasket ? ({ ...productInBasket, quantity: productInBasket.quantity - 1 }) : cartProduct)
        }
        default: return state;
    }
};
