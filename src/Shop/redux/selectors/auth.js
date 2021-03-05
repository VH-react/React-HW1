import { createSelector } from '@reduxjs/toolkit';

export const getCurrentAuthState = createSelector(
  state => state.auth,
  state => state
);
