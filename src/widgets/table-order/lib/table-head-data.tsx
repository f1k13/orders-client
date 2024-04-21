type TableHeadDataType = {
  id: string;
  name: string;
  meta?: Meta;
};
type Meta = {
  sort: true;
};
export const tableHeadData: TableHeadDataType[] = [
  {
    id: "numberOrder",
    name: "Номер заявки",
    meta: { sort: true },
  },
  {
    id: "date",
    name: "Дата создания заявки",
    meta: { sort: true },
  },
  {
    id: "time",
    name: "Время создания заявки",
    meta: { sort: true },
  },
  {
    id: "nameOfClientsCompany",
    name: "Название фирмы клиента",
  },
  {
    id: "nameOfCarrier",
    name: "ФИО Перевозчика",
  },
  {
    id: "phoneNumberOfCarrier",
    name: "Контактный телефон перевозчика",
  },
  {
    id: "statusOrder",
    name: "Статус заявки",
  },
  {
    id: "ati",
    name: "ATI код сети перевозчика",
    meta: { sort: true },
  },
];
