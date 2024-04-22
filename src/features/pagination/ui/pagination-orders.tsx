import { Pagination } from "@gravity-ui/uikit";
import styles from "./styles/pagination.module.scss";
import { $pagination, $totalCount } from "../model/pagination-model";
import { pageEvent } from "../lib/pagination-events";
import { useUnit } from "effector-react";
const PaginationOrders = () => {
  const page = useUnit($pagination);
  const totalCount = useUnit($totalCount);
  const handleUpdate = (newPage: number) => {
    pageEvent(newPage);
  };

  return (
    <Pagination
      className={styles.root}
      page={page}
      pageSize={10}
      total={totalCount}
      onUpdate={handleUpdate}
    />
  );
};

export default PaginationOrders;
