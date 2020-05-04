import { combineReducers } from "redux";
import user from "./user";
import products from "./products";
import categories from "./products";
import category from "./products";
import characters from "./characters";


const reducer = combineReducers({
    user,
    products,
    categories,
    category,
    characters
})
export default reducer;