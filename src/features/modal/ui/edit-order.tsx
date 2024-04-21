import { Modal, Text } from "@gravity-ui/uikit";
import styles from "./styles/modal.module.scss";
import { EditForm } from "@/entities/orders/ui";
const EditOrder = ({
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
      <Text variant="display-1">Измените заявку</Text>
      <EditForm />
    </Modal>
  );
};

export default EditOrder;
