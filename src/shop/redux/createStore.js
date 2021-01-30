import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
    thunk
];

export default function (){
    // settings for store can be placed here
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}