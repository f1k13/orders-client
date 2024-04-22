import { FilterOrderData } from "@/shared/types/order-type";
import { sample } from "effector";
import { createForm } from "effector-forms";
import { filterOrderFx } from "./filter-order-fx";

export const filterOrderForm = createForm<FilterOrderData>({
  fields: {
    numberOrder: {
      init: "",
    },
    date: {
      init: null,
    },
    time: {
      init: "",
    },
    nameOfClientsCompany: {
      init: "",
    },
    nameOfCarrier: {
      init: "",
    },
    phoneNumberOfCarrier: {
      init: "",
    },
    ati: {
      init: "",
    },
    statusOrder: {
      init: "Новая",
    },
  },
  validateOn: ["submit"],
});

sample({
  clock: filterOrderForm.formValidated,
  target: filterOrderFx,
});
