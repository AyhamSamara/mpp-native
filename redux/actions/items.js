import instance from "./instance";

import { SET_ITEMS } from "./actionTypes";

export const getItems = () => async (dispatch) => {
  try {
    const res = await instance.get("clotheslist/");
    const items = res.data;
    dispatch({
      type: SET_ITEMS,
      payload: items,
    });
  } catch (err) {
    console.error("Error while fetching items", err);
  }
};
