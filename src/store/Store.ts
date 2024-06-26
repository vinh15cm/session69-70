import { combineReducers, createStore } from "redux";
import reducerProducts from "./reducers/reducerProduct";
import reducerCart from "./reducers/reducerCart";

const rootReducer = combineReducers({
  reducerProducts,
  reducerCart,
});
const store = createStore(rootReducer);
export default store;
