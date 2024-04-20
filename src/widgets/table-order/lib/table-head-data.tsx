type TableHeadDataType = {
  id: string;
  name: string;
};

export const tableHeadData: TableHeadDataType[] = [
  {
    id: "numberOrder",
    name: "Номер заявки",
  },
  {
    id: "date",
    name: "Дата создания заявки",
  },
  {
    id: "time",
    name: "Время создания заявки",
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
  },
];
