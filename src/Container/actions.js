import { INCREASE_DEPTH } from "./constants";

export const increaseDepth = child => ({
  type: INCREASE_DEPTH,
  child
});
