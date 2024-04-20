import { alertEvent } from "@/entities/alert/lib/alert-event";
import { api } from "@/shared/api/api";
import { OrderData, SetOrderData } from "@/shared/types/order-type";
import { AxiosError } from "axios";
import { createEffect } from "effector";
import { DateTime } from "luxon";

export const createOrderFx = createEffect(async (params: SetOrderData) => {
  const {
    numberOrder,
    date,
    nameOfCarrier,
    nameOfClientsCompany,
    time,
    phoneNumberOfCarrier,
    ati,
  } = params;

  const formattedDate = date && DateTime.fromJSDate(date.toDate());
  try {
    const { data } = await api.post("/orders/create", {
      numberOrder,
      date: formattedDate?.toISODate(),
      nameOfCarrier,
      nameOfClientsCompany,
      time,
      phoneNumberOfCarrier,
      ati,
    });

    alertEvent({
      theme: "success",
      title: "Заявка создана",
      message: "Вы успешно создали заявку",
    });
    return data;
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
