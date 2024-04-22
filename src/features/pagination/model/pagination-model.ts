import { createStore } from "effector";
import { pageEvent, setTotalCountEvent } from "../lib/pagination-events";

export const $pagination = createStore<number>(1).on(
  pageEvent,
  (_, value) => value
);

export const $totalCount = createStore<number>(0).on(
  setTotalCountEvent,
  (_, value) => value
);
