import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './sliceReducers';

function createStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: true,
    });
}

export default createStore;