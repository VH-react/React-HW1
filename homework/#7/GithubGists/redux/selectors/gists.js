import { createSelector } from '@reduxjs/toolkit';

export const getGists = createSelector(
  ({gists}) => gists.data,
  gists => gists
);

export const getGistFetching = createSelector(
  ({gists}) => gists.isFetching,
  isFetching => isFetching
);

export const getChosenGistById = createSelector(
  getGists,
  (_, gistId) => gistId,
  (gists, gistId) => gists.find(({id}) => id === gistId)
);

