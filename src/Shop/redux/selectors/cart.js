import { createSelector } from '@reduxjs/toolkit';
import { getProducts } from './products';

export const getProductsInCart = createSelector(
  getProducts,
  state => state.cart,
  (products, cart) => {
    const result = cart.map(cartItem => {
      const {id, img, price, title} = products.find(product => product.id === cartItem.id);
      return {
        id, count: cartItem.count, img, price, title
      }
    });
    return result;
  }
);

export const getTotalCount = createSelector(
  getProductsInCart,
  productsInCart => {
    return productsInCart.reduce((sum, product) => {
      return sum + (1 * product.count)
    }, 0)
  }
)

export const getTotalPrice = createSelector(
  getProductsInCart,
  productsInCart => {
    const result = productsInCart.reduce((sum, product) => {
      return sum + (product.price * product.count)
    }, 0);
    return result;
  }
);
