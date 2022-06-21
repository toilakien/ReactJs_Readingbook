import { combineReducers } from "redux";
import productBookReducer from "./productBookReducer";
const rootReducer=combineReducers({
    productBookReducer,
})
export default rootReducer;