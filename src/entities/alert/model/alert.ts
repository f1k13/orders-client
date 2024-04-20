import { AlertDataType } from "@/shared/types/alert-type";
import { createStore } from "effector";
import { alertEvent, alertTime, deleteAlert } from "../lib/alert-event";

export const $alert = createStore<AlertDataType[]>([])
  .on(alertEvent, (state, notification) => {
    return [...state, { ...notification, id: Date.now().toString() }];
  })
  .on(deleteAlert, (state, id) => state.filter((item) => item.id !== id));

$alert.watch(alertTime);
