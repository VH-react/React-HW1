import {combineReducers} from "redux";
import filesReducer from './filesReducer'
import gistsReducer from './gistsReducer'

export default combineReducers({
    files: filesReducer,
    gists: gistsReducer
})