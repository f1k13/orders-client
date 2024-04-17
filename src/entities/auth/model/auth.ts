import { createStore } from "effector";
import { authEvent } from "../lib/auth-event";

export const $auth = createStore<boolean>(false).on(
    authEvent,
    (_, value) => value
);
