import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export const getOrderFx = createEffect(async (id: number) => {
  try {
    const { data } = await api.get(`/orders/getOrder?id=${id}`);
    return data;
  } catch (error) {
    return error;
  }
});
