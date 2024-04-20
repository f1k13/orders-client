import { Modal, Text } from "@gravity-ui/uikit";
import styles from "./styles/modal.module.scss";
import { CreateForm } from "@/entities/orders/ui";
const CreateOrderModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <Modal
      contentClassName={styles.modal}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Text variant="display-1">Заполните заявку</Text>
      <CreateForm setOpen={setOpen} />
    </Modal>
  );
};

export default CreateOrderModal;
