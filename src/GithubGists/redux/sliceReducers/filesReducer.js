import { createSlice } from "@reduxjs/toolkit";
import {loadFiles} from "../async/fetchData"

const filesReducer = createSlice({
    name: 'files',
    initialState: {
        data: {},
        isFetching: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [loadFiles.pending]: state => {
            state.isFetching = true;
        },
        [loadFiles.fulfilled]: (state, action) => {
            state.isFetching = false;
            const arg = action.meta.arg;
            state.data[arg.gistId] = arg.files.map((file, index) => ({
                ...file,
                fileContent: action.payload[index]
            }));
        },
        [loadFiles.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
        }
    }
});

export default filesReducer.reducer;
