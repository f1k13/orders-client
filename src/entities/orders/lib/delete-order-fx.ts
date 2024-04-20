import { alertEvent } from "@/entities/alert/lib/alert-event";
import { api } from "@/shared/api/api";
import { createEffect } from "effector";

export const deleteOrder = createEffect(async (id: number) => {
  try {
    await api.delete(`/orders/delete?id=${id}`);
    alertEvent({
      theme: "info",
      title: "Заявка удалена",
      message: "Вы успешно удалили заявку",
    });
    return id;
  } catch (error) {
    return error;
  }
});
