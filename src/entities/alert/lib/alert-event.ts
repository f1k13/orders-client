import { AlertDataType } from "@/shared/types/alert-type";
import { createEvent } from "effector";

export const alertEvent = createEvent<AlertDataType>();
