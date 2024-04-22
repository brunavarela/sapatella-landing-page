import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";

import cartReducer from "./cart/reducer";

const reducers = combineReducers({ productsCart: cartReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
