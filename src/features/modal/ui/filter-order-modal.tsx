import { Modal, Text } from "@gravity-ui/uikit";
import styles from "./styles/modal.module.scss";
import { FilterForm } from "@/entities/orders/ui";
const FilterOrderModal = ({
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
      <Text variant="display-1">Заполните фильтры</Text>
      <FilterForm setOpen={setOpen} />
    </Modal>
  );
};

export default FilterOrderModal;
