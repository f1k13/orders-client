import { AlertDataType } from "@/shared/types/alert-type";
import { createEvent } from "effector";

export const alertEvent = createEvent<AlertDataType>();
export const deleteAlert = createEvent<string | undefined>();
export const alertTime = (data: AlertDataType[]) => {
  const alert = data.at(-1);
  if (alert) {
    setTimeout(() => {
      deleteAlert(alert.id);
    }, 5000);
  }
};
