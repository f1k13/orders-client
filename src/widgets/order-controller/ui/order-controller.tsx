import { Button, Card, Icon, Text, TextInput } from "@gravity-ui/uikit";
import styles from "./styles/order-controller.module.scss";
import { useEffect, useState } from "react";
import CreateOrderModal from "@/features/modal/ui/create-order-modal.tsx";
import { useUnit } from "effector-react";
import { NutHex, CircleXmark } from "@gravity-ui/icons";
import {
  getOrdersFx,
  searchOrderFx,
} from "@/entities/orders/lib/get-orders-fx";
import { FilterOrderModal } from "@/features/modal/ui";
import {
  $pagination,
  $totalCount,
} from "@/features/pagination/model/pagination-model";
import { $mode } from "@/entities/mode/model/mode";
const OrderController = () => {
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const totalCount = useUnit($totalCount);
  const page = useUnit($pagination);
  const mode = useUnit($mode);
  useEffect(() => {
    if (title) {
      setTimeout(() => {
        searchOrderFx(title);
      }, 3000);
    } else {
      getOrdersFx(page);
    }
  }, [title]);
  useEffect(() => {
    getOrdersFx(page);
  }, [page]);
  return (
    <div className={styles.root}>
      <div className={styles.filters}>
        <Button onClick={() => setOpenFilter(true)} size="xl">
          Фильтры
          <Icon data={NutHex} />
        </Button>
        <Button onClick={() => getOrdersFx(page)} size="xl">
          Сбросить фильтры
          <Icon data={CircleXmark} />
        </Button>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="search"
          placeholder="Поиск по номеру заявки"
          size="xl"
        />
      </div>
      <div className={styles.endInfo}>
        <Card className={styles.card} theme="info" size="l">
          <Text variant="body-3">
            {!totalCount ? "Нет заявок" : `Количество заявок: ${totalCount} `}
          </Text>
        </Card>

        {mode && (
          <Button onClick={() => setOpenCreate(true)} size="xl">
            Создать заявку
          </Button>
        )}
      </div>
      <CreateOrderModal open={openCreate} setOpen={setOpenCreate} />
      <FilterOrderModal open={openFilter} setOpen={setOpenFilter} />
    </div>
  );
};

export default OrderController;
