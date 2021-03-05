import { createSelector } from '@reduxjs/toolkit';

export const getFiles = createSelector(
  ({files}) => files.data,
  files => files
);

export const getFilesFetching = createSelector(
  ({files}) => files.isFetching,
  isFetching => isFetching,
);

export const getFilesByGistId = createSelector(
  getFiles,
  (_, gistId) => gistId,
  (files, gistId) => files[gistId] || []
);
