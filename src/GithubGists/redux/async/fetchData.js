import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadGists = createAsyncThunk('files/loadGists', async () => {
    const data = await fetch('https://api.github.com/gists/public').then(res => res.json());
    return data;
});

export const loadFiles = createAsyncThunk('files/fetchFiles', async ({ files, gistId }) => {
        const requests = files.map(file => fetch(file.raw_url).then(res => res.text()));
        return await Promise.all(requests);
    },
    {
        condition({gistId}, {getState}) {
            const {files} = getState();
            return !files.data[gistId]
        }
});