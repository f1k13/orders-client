import { AlertDataType } from "@/shared/types/alert-type";
import { createStore } from "effector";
import { alertEvent } from "../lib/alert-event";

export const $alert = createStore<AlertDataType>({
    theme: "normal",
    title: "",
    message: "",
}).on(alertEvent, (_, data) => data);
