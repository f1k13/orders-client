import { MainLayout } from "@/app/layouts";
import { OrderController } from "@/widgets/order-controller/ui";
import { TableOrder } from "@/widgets/table-order/ui";

const HomePage = () => {
  return (
    <MainLayout>
      <OrderController />
      <TableOrder />
    </MainLayout>
  );
};

export default HomePage;
