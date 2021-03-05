import { createSlice } from "@reduxjs/toolkit";
import {loadGists} from "../async/fetchData";

const gistsReducer = createSlice({
    name: 'gists',
    initialState: {
        data: [],
        isFetching: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [loadGists.pending]: state => {
            state.isFetching = true;
        },
        [loadGists.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.data = action.payload.map(gist => {
                return ({
                    ...gist,
                    files: Object.values(gist.files)
                });
            });

        },
        [loadGists.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
        }
    }
});

export default gistsReducer.reducer;
