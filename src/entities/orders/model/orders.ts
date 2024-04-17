import { OrderData } from "@/shared/types/order-type";
import { createStore } from "effector";
import { getOrdersFx } from "../lib/orders-fx";

export const $orders = createStore<OrderData[]>([])
    .on(getOrdersFx.doneData, (_, data) => data)
    .on(getOrdersFx.failData, () => []);
