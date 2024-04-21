import { Button, Card, Icon, Text } from "@gravity-ui/uikit";
import styles from "../styles/order-controller.module.scss";
import { useEffect, useState } from "react";
import CreateOrderModal from "@/features/modal/ui/create-order-modal.tsx";
import { useUnit } from "effector-react";
import { $orders } from "@/entities/orders/model/orders";
import { NutHex } from "@gravity-ui/icons";
import { getOrdersFx } from "@/entities/orders/lib/get-orders-fx";
import { FilterOrderModal } from "@/features/modal/ui";
const OrderController = () => {
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const orders = useUnit($orders);
  useEffect(() => {
    getOrdersFx();
  }, []);
  return (
    <div className={styles.root}>
      <Button onClick={() => setOpenFilter(true)} size="xl">
        Фильтры
        <Icon data={NutHex} />
      </Button>
      <div className={styles.endInfo}>
        <Card className={styles.card} theme="info" size="l">
          <Text variant="body-3">
            {!orders.length ? "Нет заявок" : `${orders.length} заявок`}
          </Text>
        </Card>
        <Button onClick={() => setOpenCreate(true)} size="xl">
          Создать заявку
        </Button>
      </div>
      <CreateOrderModal open={openCreate} setOpen={setOpenCreate} />
      <FilterOrderModal open={openFilter} setOpen={setOpenFilter} />
    </div>
  );
};

export default OrderController;
