import { alertEvent } from "@/entities/alert/lib/alert-event";
import { setTotalCountEvent } from "@/features/pagination/lib/pagination-events";
import { api } from "@/shared/api/api";
import { OrderData } from "@/shared/types/order-type";
import { createEffect } from "effector";

export const getOrdersFx = createEffect<number, OrderData[], Error>(
  async (page: number) => {
    try {
      const { data } = await api.get(`/orders/getOrders?page=${page}`);
      setTotalCountEvent(data.totalCount);
      return data.orders;
    } catch (error) {
      return error;
    }
  }
);
export const searchOrderFx = createEffect<string, OrderData[], Error>(
  async (title: string) => {
    try {
      const { data } = await api.get(`/orders/search?title=${title}`);
      if (data.length === 0) {
        alertEvent({
          theme: "info",
          title: "Ничего не найдено",
          message: "Заявки с таким номером не найдено",
        });
      } else {
        return data;
      }
    } catch (error) {
      return error;
    }
  }
);
