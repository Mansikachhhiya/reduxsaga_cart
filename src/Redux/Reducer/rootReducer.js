import {combineReducers} from "redux"
import {cartData} from "./reducer";
import {ProductData} from "./ProductReducer"
export default combineReducers({
cartData,
    ProductData
})