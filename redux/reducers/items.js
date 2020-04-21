import { SET_ITEMS } from "../actions/actionTypes";

export default (items = [], { type, payload }) => {
  switch (type) {
    case SET_ITEMS:
      return payload;
    default:
      return items;
  }
};
