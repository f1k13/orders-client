import { api } from "@/shared/api/api";
import { OrderData } from "@/shared/types/order-type";
import { createEffect } from "effector";

export const getOrdersFx = createEffect<void, OrderData[], Error>(async () => {
  try {
    const { data } = await api.get("/orders/getOrders");
    return data;
  } catch (error) {
    return error;
  }
});
