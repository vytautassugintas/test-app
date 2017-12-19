import { INCREASE_DEPTH } from "./constants";

let nextItemId = 100;

export const increaseDepth = (parent, child) => ({
  type: INCREASE_DEPTH,
  parent: parent,
  child: Object.assign({}, child, {id: nextItemId++})
});
