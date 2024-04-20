import { createOrderFx } from "@/entities/orders/lib/create-order-fx";
import { required } from "@/shared/lib/validators";
import { SetOrderData } from "@/shared/types/order-type";
import { sample } from "effector";
import { createForm } from "effector-forms";

export const orderForm = createForm<SetOrderData>({
  fields: {
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
  },
  validateOn: ["submit"],
});



sample({
  clock: orderForm.formValidated,
  target: createOrderFx,
});
