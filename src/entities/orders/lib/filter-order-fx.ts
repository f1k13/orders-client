import { alertEvent } from "@/entities/alert/lib/alert-event";
import { api } from "@/shared/api/api";
import { FilterOrderData } from "@/shared/types/order-type";
import { createEffect } from "effector";
import { DateTime } from "luxon";

export const filterOrderFx = createEffect(async (params: FilterOrderData) => {
  const {
    date,
    ati,
    numberOrder,
    nameOfCarrier,
    nameOfClientsCompany,
    statusOrder,
    phoneNumberOfCarrier,
  } = params;
  try {
    let queryString = `/orders/filters?`;
    if (date) {
      const formattedDate = DateTime.fromJSDate(date.toDate());
      queryString += `&date=${formattedDate.toISODate()}`;
    }

    if (ati) {
      queryString += `&ati=${ati}`;
    }

    if (numberOrder) {
      queryString += `&numberOrder=${numberOrder}`;
    }

    if (nameOfCarrier) {
      queryString += `&nameOfCarrier=${nameOfCarrier}`;
    }

    if (nameOfClientsCompany) {
      queryString += `&nameOfClientsCompany=${nameOfClientsCompany}`;
    }

    if (statusOrder) {
      queryString += `&statusOrder=${statusOrder}`;
    }

    if (phoneNumberOfCarrier) {
      queryString += `&phoneNumberOfCarrier=${phoneNumberOfCarrier}`;
    }
    console.log(queryString);
    const { data } = await api.get(queryString);
    if (data.length > 0) {
      alertEvent({
        theme: "success",
        title: "Вы успешно применили фильтры",
        message: "Данные прошли фильтрацию",
      });
      return data;
    } else {
      alertEvent({
        theme: "info",
        title: "Не найдено",
        message: "К сожалению по заданным параметрам не было найдено данных",
      });
    }
  } catch (error) {
    return error;
  }
});
