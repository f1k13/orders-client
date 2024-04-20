import { getOrdersFx } from "@/entities/orders/lib/get-orders-fx";
import { $orders } from "@/entities/orders/model/orders";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";
import { Table, TableDataItem, withTableActions } from "@gravity-ui/uikit";
import {
  CircleXmarkFill,
  PencilToSquare,
  Link,
  Comment,
} from "@gravity-ui/icons";
import { tableHeadData } from "../lib/table-head-data.tsx";
import CommentModal from "@/features/modal/ui/comment-modal.tsx";
import { setOrderId } from "@/entities/orders/lib/order-events.ts";
import { deleteOrder } from "@/entities/orders/lib/delete-order-fx.ts";

type TableActionConfig<T> = {
  text: string;
  handler: (item: T, index: number) => void;
  icon: JSX.Element;
};

const TableOrder = () => {
  const orders = useUnit($orders);
  const MyTable = withTableActions(Table);
  const [open, setOpen] = useState<boolean>(false);
  const handleEdit = (id: number) => {
    console.log("Edit order with id:", id);
  };

  const handleDelete = (id: number) => {
    deleteOrder(id);
  };
  const handleLink = (ati: string) => {
    window.open(`https://ati.su/firms/${ati}/info`);
  };
  const handleComments = (id: number) => {
    setOrderId(id);
    setOpen(true);
  };
  const getRowActions = (): TableActionConfig<TableDataItem>[] => {
    return [
      {
        text: "Удалить",
        handler: (item) => handleDelete(item.id),
        icon: <CircleXmarkFill />,
      },
      {
        text: "Редактировать",
        handler: (item) => handleEdit(item.id),
        icon: <PencilToSquare />,
      },
      {
        text: "Перейти на сайт перевозчика",
        handler: (item) => handleLink(item.ati),
        icon: <Link />,
      },
      {
        text: "Комментарии",
        handler: (item) => handleComments(item.id),
        icon: <Comment />,
      },
    ];
  };
  useEffect(() => {
    getOrdersFx();
  }, []);
  return (
    <>
      <MyTable
        data={orders}
        columns={tableHeadData}
        getRowActions={getRowActions}
      />
      <CommentModal open={open} setOpen={setOpen} />
    </>
  );
};

export default TableOrder;
