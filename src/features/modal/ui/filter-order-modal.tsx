import { Modal } from "@gravity-ui/uikit";
import styles from "./styles/modal.module.scss";
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
      FilterOrderModal
    </Modal>
  );
};

export default FilterOrderModal;
