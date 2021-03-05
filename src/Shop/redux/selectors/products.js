import { createSelector } from '@reduxjs/toolkit';

export const getProducts = createSelector(
  state => state.products.list,
  list => list
);

export const getProductsLoading = createSelector(
  state => state.products.loading,
  loading => loading
);
