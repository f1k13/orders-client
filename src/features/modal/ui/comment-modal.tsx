import { Modal, Text, Tabs } from "@gravity-ui/uikit";
import styles from "./styles/modal.module.scss";
import { useState } from "react";
import { CommentPlus } from "@gravity-ui/icons";
import { ListUl } from "@gravity-ui/icons";
import { tabData } from "@/entities/comments/lib/get-tab-comment";
const CommentModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [active, setActive] = useState("1");

  return (
    <Modal
      contentClassName={styles.modal}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Text variant="body-3">Комментарии</Text>
      <Tabs className={styles.tabs} activeTab={active}>
        <Tabs.Item
          icon={<CommentPlus />}
          id="1"
          title="Добавить комментарий"
          onClick={() => setActive("1")}
        />
        <Tabs.Item
          icon={<ListUl />}
          id="2"
          title="Посмотреть комментарии"
          onClick={() => setActive("2")}
        />
        {tabData.find((item) => item.id === active)?.component}
      </Tabs>
    </Modal>
  );
};

export default CommentModal;
