
import {combineReducers} from "redux";
import   getProductReducer  from "./reducer.js";

const rootReducer = combineReducers({
    getProductReducer: getProductReducer
});

export default rootReducer;