import { createStore } from "redux";

export const more = (val) => {
  return {
    type: "more",
    payload: val,
  };
};

let shop = (state = 50, action) => {
  if (action.type === "more") {
    return action.payload;
  }
  return state;
};

export let store = createStore(shop);
