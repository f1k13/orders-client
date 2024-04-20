import { DateTime } from "@gravity-ui/date-utils";

export interface OrderData {
  id: number;
  numberOrder: string;
  ati: string;
  date?: DateTime | null;
  time: string;
  nameOfClientsCompany: string;
  nameOfCarrier: string;
  phoneNumberOfCarrier: string;
  statusOrder: string;
}
export interface SetOrderData {
  numberOrder: string;
  date: DateTime | null;
  time: string;
  nameOfClientsCompany: string;
  nameOfCarrier: string;
  phoneNumberOfCarrier: string;
  ati: string;
}
