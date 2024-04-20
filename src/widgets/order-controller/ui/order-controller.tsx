import { Button, Card, Text } from "@gravity-ui/uikit";
import styles from "../styles/order-controller.module.scss";
import { useState } from "react";

import CreateOrderModal from "@/features/modal/ui/create-order-modal.tsx";
import { useUnit } from "effector-react";
import { $orders } from "@/entities/orders/model/orders";

const OrderController = () => {
  const [open, setOpen] = useState(false);
  const orders = useUnit($orders);
  return (
    <div className={styles.root}>
      <Card className={styles.card} theme="info" size="l">
        <Text variant="body-3">
          {!orders.length ? "Нет заявок" : `${orders.length} заявок`}
        </Text>
      </Card>
      <Button onClick={() => setOpen(true)} size="xl">
        Создать заявку
      </Button>
      <CreateOrderModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default OrderController;
