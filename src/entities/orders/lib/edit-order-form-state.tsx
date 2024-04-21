import { required } from "@/shared/lib/validators";
import { OrderData } from "@/shared/types/order-type";
import { sample } from "effector";
import { createForm } from "effector-forms";
import { putOrderFx } from "./put-order-fx";

export const editOrderForm = createForm<OrderData>({
  fields: {
    id: {
      init: 0,
    },
    numberOrder: {
      init: "",
      rules: [required()],
    },
    date: {
      init: null,
      rules: [required()],
    },
    time: {
      init: "",
      rules: [required()],
    },
    nameOfClientsCompany: {
      init: "",
      rules: [required()],
    },
    nameOfCarrier: {
      init: "",
      rules: [required()],
    },
    phoneNumberOfCarrier: {
      init: "",
      rules: [required()],
    },
    ati: {
      init: "",
      rules: [required()],
    },
    statusOrder: {
      init: "",
    },
  },
  validateOn: ["submit"],
});

sample({
  clock: editOrderForm.formValidated,
  target: putOrderFx,
});
