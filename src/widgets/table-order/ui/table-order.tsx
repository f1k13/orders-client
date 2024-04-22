import { $orders } from "@/entities/orders/model/orders";
import { useUnit } from "effector-react";
import { useState } from "react";
import {
  Table,
  TableDataItem,
  withTableActions,
  withTableSorting,
} from "@gravity-ui/uikit";
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
import EditOrder from "@/features/modal/ui/edit-order.tsx";
import { getOrderFx } from "@/entities/orders/lib/get-order.ts";
import { getCommentsFx } from "@/entities/comments/lib/get-comments.ts";
import PaginationOrders from "@/features/pagination/ui/pagination-orders.tsx";
import { $mode } from "@/entities/mode/model/mode.ts";
type TableActionConfig<T> = {
  text: string;
  handler: (item: T, index: number) => void;
  icon: JSX.Element;
};

const TableOrder = () => {
  const orders = useUnit($orders);
  const MyTable = withTableActions(withTableSorting(Table));
  const mode = useUnit($mode);
  const [openComment, setOpenComment] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const handleEdit = (id: number) => {
    console.log(id);
    setOpenEdit(true);
    getOrderFx(id);
  };

  const handleDelete = (id: number) => {
    setOrderId(id);
    deleteOrder(id);
  };
  const handleLink = (ati: string) => {
    window.open(`https://ati.su/firms/${ati}/info`);
  };
  const handleComments = (id: number) => {
    setOrderId(id);
    getCommentsFx(id);
    setOpenComment(true);
  };
  const getRowActions = (): TableActionConfig<TableDataItem>[] => {
    const actions = [
      {
        text: "Перейти на сайт перевозчика",
        handler: (item: TableDataItem) => handleLink(item.ati),
        icon: <Link />,
      },
      {
        text: "Комментарии",
        handler: (item: TableDataItem) => handleComments(item.id),
        icon: <Comment />,
      },
    ];

    if (mode) {
      actions.unshift(
        {
          text: "Редактировать",
          handler: (item) => handleEdit(item.id),
          icon: <PencilToSquare />,
        },
        {
          text: "Удалить",
          handler: (item) => handleDelete(item.id),
          icon: <CircleXmarkFill />,
        }
      );
    }

    return actions;
  };

  return (
    <>
      <MyTable
        data={orders}
        columns={tableHeadData}
        getRowActions={getRowActions}
      />
      <CommentModal open={openComment} setOpen={setOpenComment} />
      <EditOrder open={openEdit} setOpen={setOpenEdit} />
      <PaginationOrders />
    </>
  );
};

export default TableOrder;
