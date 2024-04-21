import { OrderData } from "@/shared/types/order-type";
import { createStore } from "effector";
import { getOrdersFx } from "../lib/get-orders-fx";
import { createOrderFx } from "../lib/create-order-fx";
import { setOrderId } from "../lib/order-events";
import { deleteOrder } from "../lib/delete-order-fx";
import { getOrderFx } from "../lib/get-order";

export const $orders = createStore<OrderData[]>([])
  .on(getOrdersFx.doneData, (_, data) => data)
  .on(createOrderFx.doneData, (state, data: OrderData) => [...state, data])
  .on(createOrderFx.failData, (state) => state)
  .on(getOrdersFx.failData, () => [])
  .on(deleteOrder.doneData, (state, id) =>
    state.filter((item) => item.id !== id)
  );

export const $orderId = createStore<number>(0).on(
  setOrderId,
  (_, value) => value
);

export const $order = createStore<OrderData>({} as OrderData)
  .on(getOrderFx.doneData, (_, data) => data)
  .on(getOrderFx.failData, () => {});
