import { createStore } from "effector";
import { setModeEvent } from "../lib/set-mode-event";

export const $mode = createStore<boolean>(false).on(
  setModeEvent,
  (_, value) => value
);
