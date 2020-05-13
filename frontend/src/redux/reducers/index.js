import { combineReducers } from "redux";
import user from "./user";
import order from "./order";
import product from "./products";
import lastProduct from "./products";
import categories from "./products";
import category from "./products";
import characters from "./characters";


const reducer = combineReducers({
    user,
    product,
    categories,
    category,
    characters,
    lastProduct,
    order
})
export default reducer;