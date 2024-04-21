import { alertEvent } from "@/entities/alert/lib/alert-event";
import { api } from "@/shared/api/api";
import { OrderData } from "@/shared/types/order-type";
import { AxiosError } from "axios";
import { createEffect } from "effector";
import { DateTime } from "luxon";
import { getOrdersFx } from "./get-orders-fx";

export const putOrderFx = createEffect(async (params: OrderData) => {
  try {
    const {
      id,
      numberOrder,
      date,
      nameOfCarrier,
      nameOfClientsCompany,
      time,
      phoneNumberOfCarrier,
      ati,
      statusOrder,
    } = params;

    const formattedDate = date && DateTime.fromJSDate(date.toDate());
    await api.put("/orders/edit", {
      id,
      numberOrder,
      date: formattedDate?.toISODate(),
      nameOfCarrier,
      nameOfClientsCompany,
      time,
      phoneNumberOfCarrier,
      statusOrder,
      ati,
    });
    alertEvent({
      theme: "success",
      title: "Заявка отредактирована",
      message: "Вы успешно отредактировали заявку",
    });
    await getOrdersFx();
  } catch (error) {
    if (error instanceof AxiosError) {
      alertEvent({
        theme: "danger",
        title: "Произошла ошибка",
        message: error?.response?.data.message,
      });
      throw error;
    }
  }
});
