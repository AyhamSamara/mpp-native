import { combineReducers } from "redux";

import items from "./items";
import cart from "./cart";
import user from "./user";
import errors from "./errors";
// import orders from "./orders";

export default combineReducers({
  items,
  cart,
  user,
  errors,
});
