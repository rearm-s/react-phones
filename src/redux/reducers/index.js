import {combineReducers} from "redux";
import filters from "./filters";
import cart from "./cart";
import phones from "./phones";

const rootReducers = combineReducers({
    filters,
    phones,
    cart
})

export default rootReducers;