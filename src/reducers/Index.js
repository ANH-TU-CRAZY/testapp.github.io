import { combineReducers } from "redux";
import NewItems from "./NewItems";
import products from "./products";
import itemHots from "./itemHots";
import Allproducts from "./Allproducts";
const appReducer=combineReducers({
     products,
     NewItems,
     itemHots,
     Allproducts

})
export default appReducer;